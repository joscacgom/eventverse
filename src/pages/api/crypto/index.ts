import type { NextApiRequest, NextApiResponse } from 'next'

type CryptoApiResponse = Event | { error: any } | { event: {} };

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<CryptoApiResponse>
) {
  try {
    const response = await fetch(
      'https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=EUR',
      {
        headers: {
          authorization: `Apikey ${process.env.CRYPTO_API_KEY}`
        }
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch data from the API')
    }

    const data = await response.json()
    res.status(200).json(data.EUR)
  } catch (error) {
    res.status(500).json({ error })
  }
}
