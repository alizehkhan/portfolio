import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconScale,
  IconTag,
  IconX,
} from '@tabler/icons-react';
import { Dispatch, SetStateAction, useContext } from 'react';
import { useCallback, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useMediaQuery } from 'react-responsive';

import { HikingGearContext } from '../utils/HikingGearContext';
import { getKebabCase } from '../utils/utils';
import { GearItem } from '../utils/types';

const HikingModal = ({
  hikingGear,
  setIsModalOpen,
}: {
  hikingGear: Array<GearItem>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { openedIndex, setOpenedIndex } = useContext(HikingGearContext);

  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 720px)' });

  const lastItemIndex = hikingGear.length - 1;
  const gear = hikingGear[openedIndex];

  const onLeftNavigation = useCallback(() => {
    if (openedIndex > 0) {
      setOpenedIndex((openedIndex) => openedIndex - 1);
    }
  }, [openedIndex, setOpenedIndex]);

  const onRightNavigation = useCallback(() => {
    if (openedIndex < lastItemIndex) {
      setOpenedIndex((openedIndex) => openedIndex + 1);
    }
  }, [openedIndex, lastItemIndex, setOpenedIndex]);

  useEffect(() => {
    const navigationListener = (event: KeyboardEvent) => {
      if (event.code === 'ArrowRight') {
        onRightNavigation();
      } else if (event.code === 'ArrowLeft') {
        onLeftNavigation();
      }
    };

    window.addEventListener('keydown', navigationListener);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', navigationListener);
      document.body.style.overflow = 'visible';
    };
  }, [onRightNavigation, onLeftNavigation]);

  return (
    <>
      {isTabletOrDesktop ? (
        !(openedIndex === 0) && (
          <button
            className="previous-button"
            aria-label="Previous gear item"
            onClick={() => onLeftNavigation()}
          >
            <IconArrowNarrowLeft color="white" size={24} />
          </button>
        )
      ) : (
        <button
          className="close-modal"
          aria-label="Close modal"
          onClick={() => setIsModalOpen(false)}
        >
          <IconX color="#3f3f46" size={24} />
        </button>
      )}
      <div className="modal-left">
        <div className="modal-gear-card">
          <p
            className={`card-category ${
              gear ? getKebabCase(gear.Category) : ''
            }`}
          >
            {gear.Category}
          </p>
          <img src={gear.Photo[0].url} alt="" />
        </div>
        <p className="modal-card-brand">{gear.Brand}</p>
        <p className="modal-card-product">{gear.Product}</p>
        <div className="stats">
          {gear.Price && (
            <div aria-label="Total price" title="Total price">
              <IconTag
                size={20}
                color="#928b80"
                style={{ marginRight: '8px' }}
                aria-hidden="true"
              />
              <p>
                {gear.Price?.toLocaleString('en-UK', {
                  style: 'currency',
                  currency: 'EUR',
                }).slice(0, -3)}
              </p>
            </div>
          )}
          {gear.Weight && (
            <div aria-label="Total weight" title="Total weight">
              <IconScale
                size={20}
                color="#928b80"
                style={{ marginRight: '8px' }}
                aria-hidden="true"
              />
              <p>{Math.round(gear.Weight)} g</p>
            </div>
          )}
        </div>
      </div>
      <div className="modal-right">
        <h2 className="modal-card-name">{gear.Name}</h2>
        <ReactMarkdown>{gear.Notes}</ReactMarkdown>
      </div>
      {isTabletOrDesktop && !(openedIndex === lastItemIndex) && (
        <button
          className="next-button"
          aria-label="Next gear item"
          onClick={() => onRightNavigation()}
        >
          <IconArrowNarrowRight color="white" size={24} />
        </button>
      )}
    </>
  );
};

export default HikingModal;
