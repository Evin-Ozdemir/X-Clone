// Api in bizi tanıması için gereken bir obje
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "d8b7d9a6c9msh95b988adf85f44fp1721b2jsn54008d431a03",
    "x-rapidapi-host": "twitter-api45.p.rapidapi.com",
  },
};
// BaseUrl
const baseUrl = "https://twitter-api45.p.rapidapi.com";

export class API {
  // Kurucu metot
  constructor() {}

  // ! Kullanıcı verilerini alan fonksiyon
  async getUser(userName) {
    try {
      // Api'a istek at
      const res = await fetch(
        `https://twitter-api45.p.rapidapi.com/screenname.php?screenname=${userName}`,
        options
      );
      //Api'den gele veriyi js nesnesine cevir
      const data = await res.json();

      //Veriyi döndür
      return data;
    } catch (err) {
      console.log(`Hataaa: ${err}`);
    }
  }

  // ! Kullanıcın attığı tweetleri alan fonksiyon
  async fetchData(endopint, paramName, paramValue) {
    const res = await fetch(
      `${baseUrl}/${endopint}?${paramName}=${paramValue}`,
      options
    );

    const data = await res.json();
    // Eğer data içerisinde timeline değeri varsa bunu yoksa datayı return et
    return data.timeline ? data.timeline : data;
  }
}
