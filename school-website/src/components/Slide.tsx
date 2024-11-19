import React from "react";
import { gql, useQuery } from "@apollo/client";

// GraphQL Query for fetching images
const GET_IMAGES = gql`
  query GetImages {
    images {
      id
      url
    }
  }
`;

const Slide: React.FC = () => {
  const { data, loading, error } = useQuery(GET_IMAGES);

  if (loading) {
    return <div className="text-center text-lg">Loading slideshow...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error loading images: {error.message}
      </div>
    );
  }

  return (
    <div className="relative w-full h-[60vh] flex items-center justify-center bg-gray-100">
      {/* Slideshow (Background) */}
      <div className="absolute inset-0 overflow-hidden">
        {data.images.map((image: { id: string; url: string }, index: number) => (
          <div
            key={image.id}
            className={`w-full h-full absolute transition-opacity duration-1000 ${
              index === 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Title and Description */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold drop-shadow-lg">Welcome to XYZ School</h1>
        <p className="text-lg mt-4 drop-shadow-lg">
          Shaping Young Minds for a Bright Future
        </p>
      </div>
    </div>
  );
};

export default Slide;
