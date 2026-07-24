import { NextResponse } from "next/server";

/*
 * Cette route est générée comme un fichier statique pendant `next build`.
 * Elle est nécessaire avec `output: "export"`.
 */
export const dynamic = "force-static";

type ExchangeRateApiResponse = {
  result: "success" | "error";
  base_code?: string;
  time_last_update_utc?: string;
  time_next_update_utc?: string;
  rates?: Record<string, number>;
  "error-type"?: string;
};

const SUPPORTED_CURRENCIES = [
  "USD",
  "EUR",
  "GBP",
  "CAD",
  "AED",
  "SAR",
  "JPY",
  "INR",
  "CNY",
  "MAD",
  "EGP",
  "DZD",
  "LYD",
] as const;

export async function GET() {
  try {
    const response = await fetch(
      "https://open.er-api.com/v6/latest/TND",
      {
        cache: "force-cache",
      },
    );

    if (!response.ok) {
      throw new Error(
        `Exchange API returned status ${response.status}`,
      );
    }

    const data =
      (await response.json()) as ExchangeRateApiResponse;

    if (data.result !== "success" || !data.rates) {
      throw new Error(
        data["error-type"] ??
          "Invalid exchange-rate API response",
      );
    }

    const rates: Record<string, number> = {};

    for (const code of SUPPORTED_CURRENCIES) {
      const rate = data.rates[code];

      if (
        typeof rate === "number" &&
        Number.isFinite(rate) &&
        rate > 0
      ) {
        rates[code] = rate;
      }
    }

    if (Object.keys(rates).length === 0) {
      throw new Error(
        "No supported exchange rates were returned",
      );
    }

    return NextResponse.json({
      base: data.base_code ?? "TND",
      rates,
      lastUpdated:
        data.time_last_update_utc ?? null,
      nextUpdate:
        data.time_next_update_utc ?? null,
    });
  } catch (error) {
    console.error("Currency API error:", error);

    return NextResponse.json(
      {
        error:
          "Unable to retrieve the latest exchange rates.",
      },
      {
        status: 503,
      },
    );
  }
}