import {
  ekitirImg1,
  ekitirImg2,
  ekitirImg3,
  ekitirImg4,
  ekitirImg5,
  jemberArImg1,
  jemberArImg2,
  jemberArImg3,
  jemberArImg4,
  laravelBlogImg1,
  laravelBlogImg2,
  vasilissaImg1,
  vasilissaImg2,
  vasilissaImg3,
  wmsImg1,
  wmsImg2,
  wmsImg3,
  lalasia1,
  lalasia2,
} from "../../assets/images/index";

import { GoLinkExternal } from "react-icons/go";
import { FaCode } from "react-icons/fa";

export const projects = [
  {
    name: "E-Kitir",
    image: [
      {
        source: ekitirImg1,
      },
      {
        source: ekitirImg2,
      },
      {
        source: ekitirImg3,
      },
      {
        source: ekitirImg4,
      },
      {
        source: ekitirImg5,
      },
    ],
    description:
      "Website ini untuk mengetahui silsilah dari burung perkutut, user bisa menambahkan data burung, data kandang, data anakan dan lain sebagainya",
    sources: [
      {
        name: "Link",
        link: "https://ekitir.com/",
        icon: <FaCode />,
      },
      {
        name: "Source",
        link: null,
        icon: <GoLinkExternal />,
      },
    ],
    stack: [
      {
        name: "PHP",
        color: "bg-slate-400",
        icon: "devicon-php-plain",
      },
      {
        name: "Codeigniter",
        color: "bg-red-500",
        icon: "devicon-codeigniter-plain",
      },
      {
        name: "Javascript",
        color: "bg-yellow-500",
        icon: "devicon-javascript-plain",
      },
      {
        name: "Bootstrap",
        color: "bg-violet-600",
        icon: "devicon-bootstrap-plain",
      },
    ],
  },
  {
    name: "JemberAR",
    image: [
      {
        source: jemberArImg1,
      },
      {
        source: jemberArImg2,
      },
      {
        source: jemberArImg3,
      },
      {
        source: jemberArImg4,
      },
    ],
    description:
      "App untuk mengetahui wisata yang ada di kota Jember yang terintegrasi teknologi Augmented Reality, sehingga dalam pencarian lokasi lebih mudah dan lebih nyata",
    sources: [
      {
        name: "Link",
        link: null,
        icon: <FaCode />,
      },
      {
        name: "Source",
        link: null,
        icon: <GoLinkExternal />,
      },
    ],
    stack: [
      {
        name: "Java",
        color: "bg-orange-400",
        icon: "devicon-java-plain",
      },
      {
        name: "Javascript",
        color: "bg-yellow-500",
        icon: "devicon-javascript-plain",
      },
    ],
  },
  {
    name: "Laravel Blog",
    image: [
      {
        source: laravelBlogImg1,
      },
      {
        source: laravelBlogImg2,
      },
    ],
    description:
      "Website ini hasil belajar laravel dari youtube channel WPU playlist Laravel 8, tampilan belum diubah masih real seperti divideo",
    sources: [
      {
        name: "Link",
        link: "https://www.youtube.com/playlist?list=PLFIM0718LjIWiihbBIq-SWPU6b6x21Q_2",
        icon: <FaCode />,
      },
      {
        name: "Source",
        link: "https://www.github.com/akbaridc/laravelBlog",
        icon: <GoLinkExternal />,
      },
    ],
    stack: [
      {
        name: "PHP",
        color: "bg-slate-400",
        icon: "devicon-php-plain",
      },
      {
        name: "Laravel",
        color: "bg-red-600",
        icon: "devicon-laravel-plain",
      },
      {
        name: "Bootstrap",
        color: "bg-violet-600",
        icon: "devicon-bootstrap-plain",
      },
    ],
  },
  {
    name: "Vasilissa Beauty",
    image: [
      {
        source: vasilissaImg1,
      },
      {
        source: vasilissaImg2,
      },
      {
        source: vasilissaImg3,
      },
    ],
    description:
      "Website semi Ecommerce yang memperjualkan produk kecantikan dari brand lokal sendiri, bisa mendaftar menjadi member untuk mendapatka diskon harga produk",
    sources: [
      {
        name: "Link",
        link: "https://vasilissa.co.id",
        icon: <FaCode />,
      },
      {
        name: "Source",
        link: null,
        icon: <GoLinkExternal />,
      },
    ],
    stack: [
      {
        name: "PHP",
        color: "bg-slate-400",
        icon: "devicon-php-plain",
      },
      {
        name: "Codeigniter",
        color: "bg-red-500",
        icon: "devicon-codeigniter-plain",
      },
      {
        name: "Javascript",
        color: "bg-yellow-500",
        icon: "devicon-javascript-plain",
      },
      {
        name: "Bootstrap",
        color: "bg-violet-600",
        icon: "devicon-bootstrap-plain",
      },
    ],
  },
  {
    name: "Warehouse System Management",
    image: [
      {
        source: wmsImg1,
      },
      {
        source: wmsImg2,
      },
      {
        source: wmsImg3,
      },
    ],
    description:
      "Website untuk memanage barang stok keluar / masuk, opname gudang, koreksi stok, mutasi stok",
    sources: [
      {
        name: "Link",
        link: null,
        icon: <FaCode />,
      },
      {
        name: "Source",
        link: null,
        icon: <GoLinkExternal />,
      },
    ],
    stack: [
      {
        name: "PHP",
        color: "bg-slate-400",
        icon: "devicon-php-plain",
      },
      {
        name: "Codeigniter",
        color: "bg-red-500",
        icon: "devicon-codeigniter-plain",
      },
      {
        name: "Javascript",
        color: "bg-yellow-500",
        icon: "devicon-javascript-plain",
      },
      {
        name: "Bootstrap",
        color: "bg-violet-600",
        icon: "devicon-bootstrap-plain",
      },
    ],
  },
  {
    name: "Lalasia",
    image: [
      {
        source: lalasia1,
      },
      {
        source: lalasia2,
      },
    ],
    description:
      "Website slicing menggunakan React Js dan Next Js, Dikerjakan oleh 4 orang dimana sama-sama belajar React Js",
    sources: [
      {
        name: "Link",
        link: "https://lalasia-nextjs.netlify.app/",
        icon: <FaCode />,
      },
      {
        name: "Source",
        link: null,
        icon: <GoLinkExternal />,
      },
    ],
    stack: [
      {
        name: "ReactJs",
        color: "bg-[#61dafb]",
        icon: "devicon-react-original",
      },
      {
        name: "NextJs",
        color: "bg-slate-900",
        icon: "devicon-nextjs-original",
      },
      {
        name: "Tailwind",
        color: "bg-sky-400",
        icon: "devicon-tailwindcss-plain",
      },
    ],
  },
];
