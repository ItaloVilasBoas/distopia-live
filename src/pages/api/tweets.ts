import type { NextApiRequest, NextApiResponse } from 'next'
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const tweets: string[] = [];
  [
    '1864358000611188995',
    '1864358341096489394',
    '1864358330648396008',
    '1863599568966832143',
    '1862939156789215441'
  ].forEach((t, index) => {
    setTimeout(() => {
      fetch(`https://iframely.com/api/try?url=https://x.com/Distopialel/status/${t}&_theme=dark`)
        .then(res => res.json())
        .then(data => {
          tweets.push(data.code);
          if(index === 4) res.status(200).json({ tweets })
        });
    }, 1000 * index);
  });
}