const ENDPOINT = "http://localhost:8000/api";
const IPENDPOINT = "https://api.ipify.org/?format=json";

export async function loginService({ userName, password }) {
  const deviceInfo = navigator.userAgent;
  const userIpres = await fetch(IPENDPOINT);
  const { ip } = await userIpres.json();
  const geolocationRes = await fetch(
    `https://ipgeolocation.abstractapi.com/v1/?api_key=e43f6af0cdc54c13aa1e4e48d1f805d8&ip_address=${ip}`
  );
  const geolocation = await geolocationRes.json();
  return fetch(`${ENDPOINT}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName,
      password,
      deviceInfo,
      geolocation,
    }),
  })
    .then((res) => {
      if (!res.ok) throw Error("Response is Not OK");
      console.log(res);
      return res.json();
    })
    .then((res) => {
      const jwt = res.jwt;
      return jwt;
    })
    .catch((err) => {
      return console.log(err);
    });
}

export const logoutService = (jwt) => {
  fetch(`${ENDPOINT}/logout/${jwt}`, { method: "POST" });
};
