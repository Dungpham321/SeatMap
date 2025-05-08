export interface Seat {
    id: string;
    status: 'available' | 'unavailable' | 'selected';
}
  
export interface Floor {
    name: string;
    seats: Seat[][]; // Mảng 2 chiều biểu diễn các hàng và cột ghế
}
  
export interface SeatmapProps {
    floors: Floor[];
    onSeatClick: (seatId: string, floorName: string) => void;
    selectedSeats: { [floor: string]: string[] }; // Theo dõi ghế đã chọn
}