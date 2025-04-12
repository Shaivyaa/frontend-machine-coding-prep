import React, { useState, useEffect } from "react";

const InfiniteScrolling = () => {
  const [items, setItems] = useState(
    Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)
  );
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    setTimeout(() => {
      if (items.length >= 100) {
        setHasMore(false);
        return;
      }
      setItems((prev) => [
        ...prev,
        ...Array.from({ length: 20 }, (_, i) => `Item ${prev.length + i + 1}`),
      ]);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight &&
        hasMore
      ) {
        loadMore();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore]);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="p-4 border-b">
          {item}
        </div>
      ))}
      {!hasMore && <p className="text-center my-4">No more items</p>}
    </div>
  );
};

export default InfiniteScrolling;
