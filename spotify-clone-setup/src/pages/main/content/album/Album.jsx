import React from "react";
import Tag from "../../../../components/tag/Tag";
import AlbumCard from "../../../../components/album/AlbumCard";

const albumData = [
  {
    albumImage:
      "https://cdn.pixabay.com/photo/2016/08/15/16/48/vinyl-1595847_1280.jpg",
    albumName: "Vibes of Summer",
    albumArtist: "DJ Sonic",
  },
  {
    albumImage:
      "https://cdn.pixabay.com/photo/2022/12/19/17/18/photos-7666143_1280.jpg",
    albumName: "Midnight Jazz",
    albumArtist: "John Blue",
  },
  {
    albumImage:
      "https://cdn.pixabay.com/photo/2017/08/03/18/11/hand-2577690_640.jpg",
    albumName: "Live Energy",
    albumArtist: "The Beats",
  },
  {
    albumImage:
      "https://cdn.pixabay.com/photo/2017/11/29/21/36/hangover-2987147_640.jpg",
    albumName: "Urban Flow",
    albumArtist: "Rapper X",
  },
  {
    albumImage:
      "https://cdn.pixabay.com/photo/2019/08/02/07/00/teen-4378931_640.jpg",
    albumName: "Soft Nights",
    albumArtist: "Lily Grace",
  },
];

const Album = () => {
  return (
    <div className="w-full space-y-4">
      <Tag title={"Popular Albums"} link={"/"} />
      <div className="w-full grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2">
        {albumData.map((album, idx) => (
          <AlbumCard
            key={idx}
            albumImage={album.albumImage}
            albumName={album.albumName}
            albumArtist={album.albumArtist}
          />
        ))}
      </div>
    </div>
  );
};

export default Album;
