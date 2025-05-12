"use client";
import React, { useState } from 'react';
import Seatmap from './component/SeatMapComponent';
import styles from './styles/Home.module.css'; // Hoặc tạo một file CSS riêng cho trang
import {Seat, Floor, SeatmapProps} from './interface/type';
import { CarouselTransition } from './component/CarouselTransition';

const Home: React.FC = () => {
  const initialFloors: { [key: string]: Seat[][] } = {
    'Tầng dưới': [
      [{ id: 'D1-1', status: 'available' }, { id: 'D1-2', status: 'available' }, { id: 'D1-3', status: 'unavailable' }, { id: 'D1-4', status: 'unavailable' }],
      [{ id: 'D2-1', status: 'available' }, { id: 'D2-2', status: 'available' }, { id: 'D2-3', status: 'unavailable' }, { id: 'D2-4', status: 'unavailable' }],
      [{ id: 'D3-1', status: 'available' }, { id: 'D3-2', status: 'unavailable' }, { id: 'D3-3', status: 'unavailable' }, { id: 'D3-4', status: 'available' }],
      [{ id: 'D4-1', status: 'available' }, { id: 'D4-2', status: 'available' }, { id: 'D4-3', status: 'available' }, { id: 'D4-4', status: 'available' }],
    ],
    'Tầng trên': [
      [{ id: 'T1-1', status: 'available' }, { id: 'T1-2', status: 'available' }, { id: 'T1-3', status: 'available' }, { id: 'T1-4', status: 'available' }],
      [{ id: 'T2-1', status: 'available' }, { id: 'T2-2', status: 'available' }, { id: 'T2-3', status: 'available' }, { id: 'T2-4', status: 'available' }],
      [{ id: 'T3-1', status: 'available' }, { id: 'T3-2', status: 'available' }, { id: 'T3-3', status: 'available' }, { id: 'T3-4', status: 'available' }],
      [{ id: 'T4-1', status: 'available' }, { id: 'T4-2', status: 'available' }, { id: 'T4-3', status: 'available' }, { id: 'T4-4', status: 'available' }],
      [{ id: 'T5-1', status: 'available' }, { id: 'T5-2', status: 'available' }, { id: 'T5-3', status: 'available' }, { id: 'T5-4', status: 'available' }],
      [{ id: 'T6-1', status: 'available' }, { id: 'T6-2', status: 'available' }, { id: 'T6-3', status: 'available' }, { id: 'T6-4', status: 'available' }],
    ],
  };
  const [floorsData, setFloorsData] = useState<Floor[]>(
    Object.entries(initialFloors).map(([name, seats]) => ({ name, seats }))
  );
  const [selectedSeats, setSelectedSeats] = useState<{ [floor: string]: string[] }>({});

  const handleSeatClick = (seatId: string, floorName: string) => {
    setSelectedSeats((prevSelected) => {
      const floorSeats = prevSelected[floorName] || [];
      if (floorSeats.includes(seatId)) {
        return {
          ...prevSelected,
          [floorName]: floorSeats.filter((id) => id !== seatId),
        };
      } else {
        return {
          ...prevSelected,
          [floorName]: [...floorSeats, seatId],
        };
      }
    });
  };

  return (
    <div className="flex flex-col min-h-screen lg:mt-19">
      <div className='carousel h-100 w-auto'>
        <CarouselTransition/>
      </div>
      {/* <main className={styles.main}>
        <h1>Sơ đồ Ghế</h1>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div className={`${styles.seat} ${styles.unavailable}`}><span className={styles.unavailableIcon}>X</span></div>
            <span>Ghế không bán</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.seat} ${styles.selected}`}><span className={styles.selectedIcon}>✓</span></div>
            <span>Đang chọn</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.seat} ${styles.available}`}></div>
            <span>Còn trống</span>
          </div>
        </div>
        <Seatmap
          floors={floorsData}
          onSeatClick={handleSeatClick}
          selectedSeats={selectedSeats}
        />
        <div className={styles.selectedList}>
          <h2>Ghế đã chọn:</h2>
          {Object.entries(selectedSeats).map(([floor, seats]) => (
            <div key={floor}>
              <h3>{floor}:</h3>
              {seats.length > 0 ? (
                <ul>
                  {seats.map((seat) => (
                    <li key={seat}>{seat}</li>
                  ))}
                </ul>
              ) : (
                <p>Chưa có ghế nào được chọn.</p>
              )}
            </div>
          ))}
        </div>
      </main> */}
    </div>
  );
};

export default Home;