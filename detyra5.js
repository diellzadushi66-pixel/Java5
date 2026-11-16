const a = "25", b = "17", c = "8";


  console.log("Pa konvertim:", a + b + c);

  const na = Number(a), nb = Number(b), nc = Number(c);
  const shuma = na + nb + nc;
  const mesatarja = shuma / 3;

  console.log("Shuma:", shuma);
  console.log("Mesatarja:", mesatarja);
  console.log("Tipi i shumës:", typeof shuma);
  console.log("Tipi i mesatares:", typeof mesatarja);