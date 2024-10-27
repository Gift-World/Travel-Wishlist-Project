import React, { useEffect, useState } from "react";
import DestinationCard from "./DestinationCard";

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch('https://travel-wishlist-project-backend.onrender.com/destinations')
			.then((res) => res.json())
			.then((data) => setDestinations(data))
			.catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleCardClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="listcard">
      {destinations.map((des) => (
        <DestinationCard
          key={des.id}
          destination={des}
          isSelected={selectedId === des.id}
         
          onClick={() => handleCardClick(des.id)}
        />
        
      ))
      
      }
       
    </div>
  );
};

export default DestinationList;