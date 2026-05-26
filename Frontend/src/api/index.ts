import axios from 'axios';
import { type Faculty, type Student, type Event } from '../types';

const FACULTY_API = 'http://localhost:8081/faculty';
const STUDENT_API = 'http://localhost:8080/students';

export const facultyRegister = (data: Faculty) =>
  axios.post(`${FACULTY_API}/register`, data).then(r => r.data);

export const facultyLogin = (emailId: string, password: string) =>
  axios.post(`${FACULTY_API}/login`, { emailId, password }).then(r => r.data);

export const studentRegister = (data: Student) =>
  axios.post(`${STUDENT_API}/register`, data).then(r => r.data);

export const studentLogin = (emailId: string, password: string) =>
  axios.post(`${STUDENT_API}/login`, { emailId, password }).then(r => r.data);

export const studentGetEvents = (rollNumber: string) =>
  axios.get(`${STUDENT_API}/events/${rollNumber}`).then(r => r.data);

export const addEvent = (data: Event) =>
  axios.post(`${FACULTY_API}/events`, data).then(r => r.data);

export const getEventsByMonth = (month: number, year: number) =>
  axios.get(`${FACULTY_API}/events/month`, { params: { month, year } }).then(r => r.data);

export const updateEvent = (eventId: string, facultyId: string, data: Partial<Event>) =>
  axios.put(`${FACULTY_API}/events/${eventId}`, data, { params: { facultyId } }).then(r => r.data);

export const deleteEvent = (eventId: string, facultyId: string) =>
  axios.delete(`${FACULTY_API}/events/${eventId}`, { params: { facultyId } }).then(r => r.data);