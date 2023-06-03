import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Route, Routes } from 'react-router-dom';

import HikingFilters from '../../components/HikingFilters';
import HikingMobileFilters from '../../components/HikingMobileFilters';
import HikingGrid from '../../components/HikingGrid';
import HikingStats from '../../components/HikingStats';
import { HikingGearContext } from '../../utils/HikingGearContext';
import { CategoryKebabCase } from '../../utils/types';

const HikingGear = () => {
  const [gearById, setGearById] = useState({});
  const [openedIndex, setOpenedIndex] = useState<number>(0);
  const [selectedFilter, setSelectedFilter] = useState<
    CategoryKebabCase | undefined
  >(undefined);

  const url =
    'https://api.airtable.com/v0/appnNWtIST8PkjtLZ/Gear?sort%5B0%5D%5Bfield%5D=Order&sort%5B0%5D%5Bdirection%5D=asc&api_key=keypPM03FSXY4VjgX';

  useEffect(() => {
    const getGear = async () => {
      const res = await fetch(url);
      const { records } = await res.json();

      const normalisedData = records.reduce((accumulator: any, gear: any) => {
        accumulator[gear.id] = { ...gear.fields, id: gear.id };
        return accumulator;
      }, {});

      setGearById(normalisedData);
    };

    getGear();
  }, []);

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
    <HikingGearContext.Provider
      value={{
        gearById,
        setGearById,
        selectedFilter,
        setSelectedFilter,
        openedIndex,
        setOpenedIndex,
      }}
    >
      <h1 className="container font-serif text-4xl leading-tight text-neutral-700 md:text-7xl md:leading-tight">
        My Hiking Gear
      </h1>
      {!isTabletOrDesktop && <HikingMobileFilters />}

      <div className="sticky top-0 z-[1] bg-neutral-100" ref={filterBarRef}>
        <div className="container flex justify-center py-8 md:justify-between">
          {isTabletOrDesktop && <HikingFilters />}
          <HikingStats />
        </div>
      </div>

      <Routes>
        <Route index element={<HikingGrid />} />
        <Route path=":selectedFilter" element={<HikingGrid />} />
      </Routes>
    </HikingGearContext.Provider>
  );
};

export default HikingGear;
