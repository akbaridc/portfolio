import {
  ekitirImg1,
  jemberArImg1,
  laravelBlogImg1,
  vasilissaImg1,
} from "../../assets/images/index";

import { GoLinkExternal } from "react-icons/go";
import { FaCode } from "react-icons/fa";

export const projects = [
  {
    name: "E-Kitir",
    img: ekitirImg1,
    description:
      "Website ini untuk mengetahui silsilah dari burung perkutut, user bisa menambahkan data burung, data kandang, data anakan dan lain sebagainya",
    sources: [
      {
        name: "link",
        link: "https://ekitir.com/",
        icon: <FaCode />,
      },
      {
        name: "source",
        link: null,
        icon: <GoLinkExternal />,
      },
    ],
    stack: [
      {
        name: "PHP",
        color: "bg-slate-400",
      },
      {
        name: "Codeigniter",
        color: "bg-red-500",
      },
      {
        name: "Javascript",
        color: "bg-yellow-500",
      },
      {
        name: "Bootstrap",
        color: "bg-violet-600",
      },
    ],
  },
  {
    name: "JemberAR",
    img: jemberArImg1,
    description:
      "App untuk mengetahui wisata yang ada di kota Jember yang terintegrasi teknologi Augmented Reality, sehingga dalam pencarian lokasi lebih mudah dan lebih nyata",
    sources: [
      {
        name: "link",
        link: null,
        icon: <FaCode />,
      },
      {
        name: "source",
        link: null,
        icon: <GoLinkExternal />,
      },
    ],
    stack: [
      {
        name: "Java",
        color: "bg-orange-400",
      },
      {
        name: "Javascript",
        color: "bg-yellow-500",
      },
    ],
  },
  {
    name: "Laravel Blog",
    img: laravelBlogImg1,
    description:
      "Website ini hasil belajar laravel dari youtube channel WPU playlist Laravel 8, tampilan belum diubah masih real seperti divideo",
    sources: [
      {
        name: "link",
        link: "https://www.youtube.com/playlist?list=PLFIM0718LjIWiihbBIq-SWPU6b6x21Q_2",
        icon: <FaCode />,
      },
      {
        name: "source",
        link: "https://www.github.com/akbaridc/laravelBlog",
        icon: <GoLinkExternal />,
      },
    ],
    stack: [
      {
        name: "PHP",
        color: "bg-slate-400",
      },
      {
        name: "Laravel",
        color: "bg-red-600",
      },
      {
        name: "Bootstrap",
        color: "bg-violet-600",
      },
    ],
  },
  {
    name: "Vasilissa Beauty",
    img: vasilissaImg1,
    description:
      "Website semi Ecommerce yang memperjualkan produk kecantikan dari brand lokal sendiri, bisa mendaftar menjadi member untuk mendapatka diskon harga produk",
    sources: [
      {
        name: "link",
        link: "https://vasilissa.co.id",
        icon: <FaCode />,
      },
      {
        name: "source",
        link: null,
        icon: <GoLinkExternal />,
      },
    ],
    stack: [
      {
        name: "PHP",
        color: "bg-slate-400",
      },
      {
        name: "Codeigniter",
        color: "bg-red-500",
      },
      {
        name: "Javascript",
        color: "bg-yellow-500",
      },
      {
        name: "Bootstrap",
        color: "bg-violet-600",
      },
    ],
  },
];
