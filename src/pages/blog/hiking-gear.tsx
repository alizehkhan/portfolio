import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Route, Routes } from 'react-router-dom';

import { setHikingGear } from '../../store/actions';
import HikingFilters from '../../components/HikingFilters';
import HikingMobileFilters from '../../components/HikingMobileFilters';
import HikingGrid from '../../components/HikingGrid';
import HikingStats from '../../components/HikingStats';

const HikingGear = () => {
  const url =
    'https://api.airtable.com/v0/appnNWtIST8PkjtLZ/Gear?sort%5B0%5D%5Bfield%5D=Order&sort%5B0%5D%5Bdirection%5D=asc&api_key=keypPM03FSXY4VjgX';

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setHikingGear(data));
      })
      .catch(() =>
        console.log(
          "Oops, we're having trouble fetching Alizeh's hiking gear list!"
        )
      );
  }, [dispatch]);

  const filterBarRef = useRef(null);
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 880px)' });

  const handleScroll = () => {
    if (!filterBarRef.current) return;

    const element = filterBarRef.current as HTMLElement;

    element.style.boxShadow =
      element.getBoundingClientRect().top === 0
        ? '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)'
        : 'none';
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <h1 className="container font-serif text-5xl leading-tight text-neutral-700 md:text-7xl md:leading-tight">
        My Hiking Gear
      </h1>
      {!isTabletOrDesktop && <HikingMobileFilters />}

      <div className="control-panel" ref={filterBarRef}>
        <div className="container">
          {isTabletOrDesktop && <HikingFilters />}
          <HikingStats />
        </div>
      </div>

      <Routes>
        <Route index element={<HikingGrid />} />
        <Route path=":selectedFilter" element={<HikingGrid />} />
      </Routes>
    </>
  );
};

export default HikingGear;
