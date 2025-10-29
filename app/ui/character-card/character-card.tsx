"use client";

import styles from "./character-card.module.scss";
import clsx from "clsx";

export type CharacterCardProps = {
  id: number;
  name: string;
  species: string;
  type: string;
  status: string;
  clickHandler?: () => void;
  isActive?: boolean;
};

export const CharacterCard = ({
  name,
  species,
  type,
  status,
  clickHandler,
  isActive,
}: CharacterCardProps) => {
  const addToFavorites = async (
    name: string,
    species: string,
    type: string,
    status: string
  ) => {
    const response = await fetch("/api/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, species, type, status }),
    });
    if (response.ok) {
      console.log("Added to favorites");
    } else {
      console.log("Failed to add to favorites");
    }
  };

  return (
    <div
      className={clsx(
        styles.characterCard,
        "block bg-neutral-900 rounded-lg p-4 shadow-md hover:scale-101 duration-300 cursor-pointer"
      )}
      onClick={clickHandler}
      style={{ viewTransitionName: isActive ? `character-card` : undefined }}
    >
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-sm text-gray-500">species: {species || "Unknown"}</p>
      <p className="text-sm text-gray-500">type: {type || "Unknown"}</p>
      <p className="text-sm text-gray-500">status: {status || "Unknown"}</p>
      <button
        onClick={() => addToFavorites(name, species, type, status)}
        className="cursor-pointer bg-amber-300 text-black rounded hover:bg-amber-400 transition-colors p-2 mt-4"
      >
        + Add to Favorites
      </button>
    </div>
  );
};
