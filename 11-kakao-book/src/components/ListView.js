import React from "react";
import dayjs from "dayjs";

import style from "../assets/scss/style.module.scss";
import noimg from "../assets/img/noimg.png";

const ListView = ({ documents, thumb }) => {
  return (
    <ul className={style.mediaList}>
      {documents.map((item, index) => (
        <li className={style.mediaItem} key={index}>
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className={thumb && style.thumbnail}
          >
            {thumb && (
              <img
                src={item.thumbnail ? item.thumbnail : noimg}
                onError={(e) => (e.currentTarget.src = noimg)}
                alt={item.title}
              />
            )}

            <h2
              className={style.mediaHeading}
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
            <p
              className={style.desc}
              dangerouslySetInnerHTML={{ __html: item.contents }}
            />

            {item.price && (
              <p className={item.price}>
                정가: <span>{item.price}</span> / 판매가:{" "}
                <span>{item.sale_price}</span>
              </p>
            )}

            <p className={style.date}>
                {/* 저자 정보가 있을 경우만 출력되는 영역 (for 책검색) */}
              {item.authors && (
                <span>
                  <strong>{item.authors.join(".")}</strong> /
                </span>
              )}

                {/* 출판사 정보가 있을 경우만 출력되는 영역 (for 책검색) */}
              {item.publisher && (
                <span>
                  <strong>{item.publisher}</strong> /
                </span>
              )}

              {item.cafename && (
                <span>
                  <strong>{item.cafename}</strong> /
                </span>
              )}

              {item.blogname && (
                <span>
                  <strong>{item.blogname}</strong> /
                </span>
              )}

              {item.datetime && (
                <span>
                  <strong>{dayjs(item.datetime).format('YYYY_MM_DD hh:mm')}</strong> / 
                </span>
              )}
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
};


ListView.defaultProps = {
    documents: [],
    thumb: false
}

export default ListView;