import React from "react";
import Tag from "../../../../components/tag/Tag";
import ArtistCard from "../../../../components/artist/ArtistCard";

const artistData = [
  {
    artistImage:
      "https://cdn.pixabay.com/photo/2018/04/17/14/50/performance-3327674_1280.jpg",
    artistName: "Artist Name",
    artistTag: "Pop, Rock",
  },
  {
    artistImage:
      "https://cdn.pixabay.com/photo/2014/11/21/16/43/singer-540771_1280.jpg",
    artistName: "John Doe",
    artistTag: "Jazz, Blues",
  },
  {
    artistImage:
      "https://cdn.pixabay.com/photo/2024/01/20/00/29/ai-generated-8520069_1280.jpg",
    artistName: "Jane Smith",
    artistTag: "Classical, Opera",
  },
  {
    artistImage:
      "https://cdn.pixabay.com/photo/2022/10/05/07/11/rishikesh-7499932_640.jpg",
    artistName: "Mike Lee",
    artistTag: "Hip-Hop, Rap",
  },
  {
    artistImage:
      "https://cdn.pixabay.com/photo/2017/09/08/07/23/an-event-2727942_640.jpg",
    artistName: "Sara Kim",
    artistTag: "Electronic, Dance",
  },
];
const Artist = () => {
  return (
    <div className="w-full space-y-4">
      <Tag title={"Popular Artist"} link={"/"} />
      <div className="w-full grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2">
        {artistData.map((artist, idx) => (
          <ArtistCard
            key={idx}
            artistImage={artist.artistImage}
            artistName={artist.artistName}
            artistTag={artist.artistTag}
          />
        ))}
      </div>
    </div>
  );
};

export default Artist;
