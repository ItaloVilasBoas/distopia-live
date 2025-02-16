import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  res.status(200).json({
    tweets: [
      '<blockquote class="twitter-tweet" data-theme="dark" data-dnt="true" align="center"><p lang="pt" dir="ltr">PRA FECHARMOS O ANO ☀️👆<br><br>❤️‍🔥TEATRO DOS LUNÁTICOS - SHOW DE TALENTOS❤️‍🔥<br><br>-Dia 13/12 SEXTA FEIRA - 20:00; <br>-TODOS podem se apresentar; <br>-Temática livre; <br>-Envie seu desenho, video, curta, imitação, meme, jogo, site, TUDO É ACEITO; <a href="https://t.co/BHwtjhi3Fp">pic.twitter.com/BHwtjhi3Fp</a></p>&mdash; Distopia ඞ (@Distopialel) <a href="https://twitter.com/Distopialel/status/1864358000611188995?ref_src=twsrc%5Etfw">December 4, 2024</a></blockquote>',
      '<blockquote class="twitter-tweet" data-theme="dark" data-dnt="true" align="center" data-conversation="none"><p lang="pt" dir="ltr">aHH POSSO IMITAR UM CRO MAGNON?? PODE. AA posso deseNHAR O FALA GLAUBER JUNTO DOS FELLAS PODCAST  DE SAIA NADA RAIZ?? PODEEEE.. POSSO FAZER UMA CRIPTOMOEDA Q RENDE MAIS QUE O CDI DO SANTANDER?? PODE TUDO PORRAAAAAA</p>&mdash; Distopia ඞ (@Distopialel) <a href="https://twitter.com/Distopialel/status/1864358341096489394?ref_src=twsrc%5Etfw">December 4, 2024</a></blockquote>',
      '<blockquote class="twitter-tweet" data-theme="dark" data-dnt="true" align="center" data-conversation="none"><p lang="pt" dir="ltr">Tudo será apresentado em LIVE no dia 13.  No entanto, envie o quanto antes possivel o que você &gt;pretende&lt; fazer!!!!   Pode enviar por aqui na DM ou no discord, quando estiver pronto também.</p>&mdash; Distopia ඞ (@Distopialel) <a href="https://twitter.com/Distopialel/status/1864358330648396008?ref_src=twsrc%5Etfw">December 4, 2024</a></blockquote>',
      '<blockquote class="twitter-tweet" data-theme="dark" data-dnt="true" align="center"><p lang="pt" dir="ltr">O GRANDE FILTRO ESTÁ VINDO.<br><br>OBRIGADO A TODOS QUE COMPARTILHARAM.<br><br>TEREMOS SABU TO ICHI ❤️‍🔥 <a href="https://t.co/99gEar24A1">https://t.co/99gEar24A1</a> <a href="https://t.co/7T9WL904uI">pic.twitter.com/7T9WL904uI</a></p>&mdash; Distopia ඞ (@Distopialel) <a href="https://twitter.com/Distopialel/status/1863599568966832143?ref_src=twsrc%5Etfw">December 2, 2024</a></blockquote>',
      '<blockquote class="twitter-tweet" data-theme="dark" data-dnt="true" align="center"><p lang="pt" dir="ltr">AGORA PRA VALER. ඞ CELLBIT NEGRO E NATA JOGA ENIGMA DO MEDO -&gt; ATÉ O FIM ඞ<br><br>GOTY?? MELHOR JOGO NACIONAL DA HISTÓRIA??? <br><br>👇👇👇<a href="https://t.co/SRDFXYptCF">https://t.co/SRDFXYptCF</a><a href="https://t.co/SRDFXYptCF">https://t.co/SRDFXYptCF</a> <a href="https://t.co/alJ2UcqSvg">pic.twitter.com/alJ2UcqSvg</a></p>&mdash; Distopia ඞ (@Distopialel) <a href="https://twitter.com/Distopialel/status/1862939156789215441?ref_src=twsrc%5Etfw">November 30, 2024</a></blockquote>',
    ],
  });
}
