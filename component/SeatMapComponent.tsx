"use client";
import React from 'react';
import styles from '../styles/Seatmap.module.css';
import {SeatmapProps} from '../interface/type';


const Seatmap: React.FC<SeatmapProps> = ({ floors, onSeatClick, selectedSeats }) => {
  console.log(floors);
  return (
    
    <div className={styles.seatmapContainer}>
      {floors.map((floor) => (
        <div key={floor.name} className={styles.floorContainer}>
          <h2>{floor.name}</h2>
          <div className={styles.seatsGrid}>
            {floor.seats.map((row, rowIndex) => (
              <div key={rowIndex} className={styles.row}>
                {row.map((seat) => {
                  const isSelected = selectedSeats[floor.name]?.includes(seat.id);
                  let seatClass = styles.seat;
                  if (seat.status === 'unavailable') {
                    seatClass = `${styles.seat} ${styles.unavailable}`;
                  } else if (isSelected) {
                    seatClass = `${styles.seat} ${styles.selected}`;
                  } else {
                    seatClass = `${styles.seat} ${styles.available}`;
                  }

                  return (
                    <div
                      key={seat.id}
                      className={seatClass}
                      onClick={() => seat.status === 'available' && onSeatClick(seat.id, floor.name)}
                    >
                      {seat.status === 'unavailable' && <span className={styles.unavailableIcon}>X</span>}
                      {isSelected && <span className={styles.selectedIcon}>✓</span>}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Seatmap;