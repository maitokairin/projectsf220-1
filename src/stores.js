import { writable } from 'svelte/store';
let user_data = {
  '1':{
    name: 'FUNKY',
    pin: '1',
    id: '1',
    quota:[]
  },
  'realmai@dome.tu.ac.th': {
    name: 'Mai Tokairin',
    pin: '1234',
    id: '6410742461',
    pic: 4,
    gender: 'Female',
    num: '0958412674',
    quota:[]
  },
  'pasin@dome.tu.ac.th': {
    name: 'พสิน กินไก่',
    pin: '1234',
    id: '6459823102',
    pic: 0,
    quota:[]
  },
  'realeve@dome.tu.ac.th': {
    name: 'Evefy Ketkeaw',
    pin: '1234',
    id: '6478215302',
    pic: 2,
    gender: 'Female',
    num: '0956824517',
    quota:[]
  },
  'realottean@dome.tu.ac.th': {
    name: 'Ottean Bunkan',
    pin: '1234',
    id: '6410742523',
    pic: 7,
    gender: 'Male',
    num: '0998625314',
    quota:[]
  },
  'realdeaw@dome.tu.ac.th': {
    name: 'Nantida Miangplaphoaw',
    pin: '1234',
    id: '64107429789',
    pic: 6,
    gender: 'Male',
    num: '0923015896',
    quota:[]
  },
  'realkdn@dome.tu.ac.th': {
    name: 'Kandanai Ketkeaw',
    pin: '1234',
    id: '6410742123',
    pic: 1,
    gender: 'Male',
    num: '0902158693',
    quota:[]
  },
  'realbinny@dome.tu.ac.th': {
    name: 'Orapa Nabamrung',
    pin: '1234',
    id: '6410742111',
    pic: 8,
    gender: 'Female',
    num: '0945237865',
    quota:[]
  },
  'realyoong@dome.tu.ac.th': {
    name: 'Chayapat Tokairin',
    pin: '1234',
    id: '6410742780',
    pic: 9,
    gender: 'Female',
    num: '0900215355',
    quota:[]
  },
  'realglasses@dome.tu.ac.th': {
    name: 'Woody Buzzfriend',
    pin: '1234',
    id: '6410742121',
    pic: 3,
    gender: 'Male',
    num: '0974269583',
    quota:[]
  },
  'realdeffy@dome.tu.ac.th': {
    name: 'Mon Thanasit',
    pin: '1234',
    id: '6410742765',
    pic: 5,
    gender: 'Male',
    num: '0914526358',
    quota:[]
  }
};

let admin_data = {
  'ajarnjack@dome.tu.ac.th': {
    name:'Michael Jackie',
    pin:'0000'
  },
  'admin@dome.tu.ac.th': {
    name:'admin',
    pin:'1111'
  }
}

let course_data = [
  {
    id: 'SF220',
    credit: '3',
    course_name: 'PROGRAMMING SKILL DEVELOPMENT 1',
    section: '760001',
    time: 'TUE 9.30 - 12.30',
    amount: 70
  },
  {
    id: 'SF210',
    credit: '3',
    course_name: 'INTRODUCTION TO SOFTWARE ENGINEERING 1',
    section: '760001',
    time: 'MON 9.30 - 12.30',
    amount: 99
  },
  {
    id: 'SF210',
    credit: '3',
    course_name: 'INTRODUCTION TO SOFTWARE ENGINEERING 2',
    section: '760002',
    time: 'MON 13.30 - 16.30',
    amount: 99
  },
  {
    id: 'MA111',
    credit: '3',
    course_name: 'FUNDAMENTALS OF CALCULUS',
    section: '760001',
    time: 'FRI 8.30 - 10.00',
    amount: 52
  },
  {
    id: 'SC135',
    credit: '3',
    course_name: 'GENERAL PHYSICS',
    section: '760001',
    time: 'THU 13.30 - 16.30',
    amount: 99
  },
  {
    id: 'TU100',
    credit: '3',
    course_name: 'CIVIC EDUCATION',
    section: '760001',
    time: 'WED 8.30 - 12.30',
    amount: 99
  }
];

export const ismenuopen = writable(true);
export const userAccounts = writable(user_data);
export const adminAccounts = writable(admin_data);
export const isLogin = writable(false);
export const mode = writable('');
export const account = writable('');
export const courses = writable(course_data);
export const isAdmin = writable(false);
export const checkmodestd = writable('');