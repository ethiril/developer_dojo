export interface Ninja {
  imgSrc?: string;
  name: string;
  email: string;
  role: string;
  favouriteLanguage?: string;
}

export const sensei: Ninja =
  {
    name: 'Chris Sharp',
    email: 'sharpc@uk.ibm.com',
    role: 'STSM, Master Inventor, DevOps Transformation Lead – Hybrid Cloud Management',
    favouriteLanguage: 'tbd',
  };

export const ninjas: Ninja[] = [
  {
    name: 'David Currie',
    email: 'David_Currie@uk.ibm.com',
    role: 'Senior Software Engineer – WebSphere Application Server Development',
    favouriteLanguage: 'tbd',
  },
  {
    name: 'Hugh Proudman',
    email: 'Hugh_Proudman@uk.ibm.com',
    role: 'Hybrid Cloud SaaS Ops Guild Leader',
    favouriteLanguage: 'tbd',
  },
  {
    name: 'Iain Duncan',
    email: 'Iain.Duncan@uk.ibm.com',
    role: 'Software Engineer – IBM Watson & Cloud Platform',
    favouriteLanguage: 'tbd',
  },
  {
    name: 'Jack Gardner',
    email: 'Jack.Gardner@ibm.com',
    role: 'UK Labs Communications Specialist ',
    favouriteLanguage: 'tbd',
  },
  {
    name: 'James Mullineux',
    email: 'Jamies.Mullineux@uk.ibm.com',
    role: 'Software Developer – IBM Watson IoT',
    favouriteLanguage: 'tbd',
  },
  {
    name: 'Mark Woolley',
    email: 'Mark.Woolley@uk.ibm.com',
    role: 'CICS L3 Service',
    favouriteLanguage: 'tbd',
  },
  {
    name: 'Ruth Scorey',
    email: 'Ruth_Scorey@uk.ibm.com',
    role: 'IBM Community Outreach & Events Management',
    favouriteLanguage: 'tbd',
  },
];
