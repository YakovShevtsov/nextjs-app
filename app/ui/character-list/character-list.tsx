"use client"

import { CharacterCard, CharacterCardProps } from "../character-card/character-card"
import { useRouter } from "next/navigation"
import { useInfiniteQuery } from "@tanstack/react-query"
import InfiniteScroll from "react-infinite-scroll-component"

export const CharacterList = ({initialItems}: {initialItems: CharacterCardProps[]}) => {

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
      } = useInfiniteQuery({
        queryKey: ['rick-and-morty-characters'],
        queryFn: ({ pageParam = 1 }) => fetch(`https://rickandmortyapi.com/api/character/?page=${pageParam}`).then(res => res.json()),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
          return lastPage.info?.next ? parseInt(lastPage.info.next.split('page=')[1]) : undefined;
        },
        initialData: { 
          pages: [{ results: initialItems, info: { next: "https://rickandmortyapi.com/api/character/?page=2" } }], 
          pageParams: [1] 
        },
        staleTime: 1000 * 60 * 5,
      })


    const router = useRouter();

    const handleClick = (id: number) => {
        router.push(`/character/${id}`)       
    }

    return (
        <InfiniteScroll 
            dataLength={data?.pages?.reduce((total, page) => total + (page.results?.length || 0), 0) || 0} 
            next={() => fetchNextPage()} 
            hasMore={hasNextPage || false} 
            loader={<div>Loading...</div>} 
            endMessage={<div>No more characters</div>}
        >
        <div>
            {status === "success" && data?.pages?.map((page) => 
                page.results?.map((item: CharacterCardProps) => (
                    <CharacterCard key={item.id} {...item} clickHandler={() => handleClick(item.id)} isActive={false}/>
                ))
            )}
            {status === "error" && <div>An unexpected error occurred</div>}
          </div>
        </InfiniteScroll>
    )
}