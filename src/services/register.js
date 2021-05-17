const ENDPOINT = "http://localhost:8000/api";
/* const IPENDPOINT = "https://api.ipify.org/?format=json"; */

export async function registerService({ userName, password }) {
  /*   const deviceInfo = navigator.userAgent;
  const userIpres = await fetch("https://api.ipify.org/?format=json");
  const { ip } = await userIpres.json();
  const geolocationRes = await fetch(
    `https://ipgeolocation.abstractapi.com/v1/?api_key=e43f6af0cdc54c13aa1e4e48d1f805d8&ip_address=${ip}`
  );
  const geolocation = await geolocationRes.json();

  const res = await fetch(IPENDPOINT);
  console.log(res.json()); */
  return fetch(`${ENDPOINT}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName,
      password,
    }),
  })
    .then((res) => {
      if (!res.ok) throw Error("Response is Not OK");
      return true;
    })
    .catch((err) => {
      throw Error;
    });
}
