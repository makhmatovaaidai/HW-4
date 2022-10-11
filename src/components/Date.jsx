import React from "react";

const array = [
  {
    albumId: 1,
    id: 1,
    title:
      "В России цена Lexus LX 570 в новом кузове составляет 10 233 000 - 11 408 000 рублейю).",
    url: "https://economist.kg/wp-content/uploads/2021/12/5d405a0aec05c4645f000015.jpeg",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 2,
    id: 2,
    title:
      "Купить Ferrari с пробегом 2022 года по цене от 27 800 000 рублей в Москве - много Феррари б/у 2022 года на Авто. ру",
    url: "https://klike.net/uploads/posts/2020-03/1583743168_2.jpg",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 3,
    id: 3,
    title:
      "При этом цена в России на Buggatti Chiron 2022 2023 года будет стартовать с отметки 2,4 млн.",
    url: "https://cdn.fishki.net/upload/post/2018/11/23/2777683/tn/db752d6a592eca4dea4a4d4b71d03e22.jpg",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
];

function Date() {
  return (
    <div className="container">
      {array.map((item) => {
        return (
          <div>
            <p className="first">{item.id}</p>
            <img src={item.url} alt="" />
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Date;
