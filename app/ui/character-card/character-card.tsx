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
}

export const CharacterCard = ({ name, species, type, status, clickHandler, isActive }: CharacterCardProps) => {
    
    return (
        <div className={clsx(styles.characterCard, "block bg-neutral-900 rounded-lg p-4 shadow-md hover:scale-101 duration-300 cursor-pointer")} onClick={clickHandler} style={{ viewTransitionName: isActive ? `character-card` : undefined }}>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-sm text-gray-500">species: {species || "Unknown"}</p>
            <p className="text-sm text-gray-500">type: {type || "Unknown"}</p>
            <p className="text-sm text-gray-500">status: {status || "Unknown"}</p>
        </div>
    )
}