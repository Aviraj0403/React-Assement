import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AppointmentForm() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [bookedDates, setBookedDates] = useState([]);

  // Mock backend to fetch hardcoded booked dates
  useEffect(() => {
    const fetchBookedDates = async () => {
      const mockBookedDates = [
        new Date('2024-12-25'),
        new Date('2024-12-31'),
      ];
      setBookedDates(mockBookedDates);
    };
    fetchBookedDates();
  }, []);

  const handleDateChange = (date) => {
    setErrorMessage('');
    setSuccessMessage('');
    if (bookedDates.some((d) => d.toDateString() === date.toDateString())) {
      setErrorMessage('This date is unavailable. Please select another date.');
    } else {
      setSelectedDate(date);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    if (!selectedDate) {
      setErrorMessage('Please select a date.');
    } else if (bookedDates.some((d) => d.toDateString() === selectedDate.toDateString())) {
      setErrorMessage('This date is unavailable. Please select another date.');
    } else {
      setSuccessMessage(`Appointment successfully booked for ${selectedDate.toDateString()}`);
      // Mock backend logic to save the booked date
      setBookedDates([...bookedDates, selectedDate]);
      setSelectedDate(null); // Reset the date after successful booking
    }
  };

  return (
    <section className="bg-blue-900 text-white py-8">
      <div className="container mx-auto max-w-lg bg-white text-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-900">
          Book Free Doctor Appointment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Patient Name */}
          <input
            type="text"
            placeholder="Patient Name"
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Mobile Number */}
          <input
            type="tel"
            placeholder="Mobile Number"
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Disease Selection */}
          <select
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Disease</option>
            <option value="Disease1">Disease 1</option>
            <option value="Disease2">Disease 2</option>
            <option value="Disease3">Disease 3</option>
          </select>

          {/* Date Picker */}
          <div className="relative">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              placeholderText="Select a date"
              minDate={new Date()}
              filterDate={(date) =>
                !bookedDates.some((d) => d.toDateString() === date.toDateString())
              }
              className="w-full px-4 py-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute right-4 top-4 text-gray-500 text-xl pointer-events-none">📅</div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
          )}

          {/* Success Message */}
          {successMessage && (
            <p className="text-green-600 text-sm mt-2">{successMessage}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Book Free Appointment
          </button>
        </form>
      </div>
    </section>
  );
}

export default AppointmentForm;
