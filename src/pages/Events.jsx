import React from 'react';
import UpcomingEvents from '../components/UpcomingEvents';
import AllEvents from '../components/AllEvents';

const Events = () => {
  return (
    <div className="pt-4">
      <UpcomingEvents />
      <AllEvents />
    </div>
  );
};

export default Events;

