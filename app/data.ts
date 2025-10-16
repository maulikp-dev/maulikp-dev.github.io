type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Converso [DRAFT]',
    description:
      'AI powered learning platform that helps you learn new skills faster.',
    link: 'https://converso.maulikpatel.ca/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Grand & Toy',
    title: 'Senior Frontend Engineer',
    start: '2022',
    end: 'Present',
    link: '',
    id: 'work1',
  },
  {
    company: 'Saranghae',
    title: 'Frontend Developer',
    start: '2020',
    end: '2022',
    link: '',
    id: 'work2',
  },
  {
    company: 'Grand & Toy',
    title: 'UI Developer',
    start: '2019',
    end: '2019',
    link: '',
    id: 'work3',
  },
  {
    company: 'Idea Rebel',
    title: 'Frontend Developer',
    start: '2018',
    end: '2017',
    link: '',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: '[Draft] How to get started with web development in 2026',
    description: 'Steps to take to start your web development journey.',
    link: '/blog/how-to-get-started-with-web-development-in-2026',
    uid: 'blog-1',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/maulikp-dev',
  }
]

export const EMAIL = 'info[@]maulikpatel.ca'
