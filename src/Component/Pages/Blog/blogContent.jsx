import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blgimg1 from "../../../assets/img/OurProduct/GreenHouseMat2.jpg";
import blgimg2 from "../../../assets/img/OurProduct/farm-floor.jpg";
import { Helmet } from "react-helmet";
import { UserContext } from "../../Common/Modal/logusecont";
import Navbar from "../../Common/Navbar";
import Footer from "../../Common/Footer";
import ResponsiveNavbar from "../../Common/Navbar/navMob";
import KeysWords from "../../Common/apiData/keyWords";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";
const BlogContent = () => {
  const { setCart, cart, setSizevalue } = useContext(UserContext);
  const { register, reset, handleSubmit } = useForm();
  const apiUrl = `${process.env.REACT_APP_API_ADMIN}`;
  const getparentidCookies = JSON.parse(localStorage.getItem("loginDetails") ?? "[]");
  //const getLocalPrevCarts = JSON.parse(localStorage.getItem("cart") ?? "[]");
  const [blogContent, setblogContent] = useState([]);

  const blogdata = [
    {
      id: 1,
      img: blgimg1,
      heading:
        "Know All About Mycotoxicosis Disease and its Management inPoultry",
      content:
        " Mycotoxicosis in poultry is a disease caused by toxins frommold-infected feed. Effective management is crucial for poultryhealth. mold-infected feed. Effective management is crucial forpoultry health. mold-infected feed. Effective management iscrucial for poultry health. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea non voluptate ipsa laudantium consectetur, sapiente adipisci? Id, earum cumque amet saepe perferendis eveniet quisquam atque nulla voluptatem reiciendis architecto quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minima numquam quidem blanditiis cupiditate mollitia aliquam deleniti autem optio alias reiciendis, quia corporis eaque earum consequuntur nostrum veritatis possimus sunt.Sequi aspernatur amet placeat? Odio doloremque sapiente modi impedit voluptatibus laborum, totam consequatur deserunt dolore aliquam, eum odit saepe itaque unde ducimus ullam. Eius aperiam at magni impedit, atque a.",
      title1: "Animal",
      title2: "Animal",
      title3: "blog",
      title4: "Farmer",
      bottomcontent: "Rumeno Animal Care",
    },
    {
      id: 2,
      img: blgimg2,
      heading:
        " Management inPoultry Know All About Mycotoxicosis Disease and its",
      content:
        "n Mycotoxicosis in poultry is a disease caused by toxins frommold-infected feed. Effective management is crucial for poultryhealth. mold-infected feed. Effective management is crucial forpoultry health. mold-infected feed. Effective management iscrucial for poultry health.",
      title1: "Animal",
      title2: "Animal",
      title3: "blog",
      title4: "Farmer",
      bottomcontent: "Rumeno Animal Care",
    },

  ];
  var Value;
  useEffect(() => {
    //setCart(getLocalPrevCarts);
    Value = cart?.length;
    if (Value !== 0) {
      setSizevalue(Value)
    }
    fetchItems()
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(`${apiUrl}/get_all_blog`);
      setblogContent(response?.data?.blog);
      console.log('response.data.blog: ', response.data.blog);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const { id } = useParams();
  const blogData = blogContent?.find((blog) => blog?._id == id);
  console.log('blogData: ', blogData);

  const onSubmit = async (data) => {
    try {
      let comntsendtoapi = {
        blog_id: blogContent._id,
        name: data.blogname,
        email: data.blogemail,
        comment: data.blogcomment,
      }
      const response = await axios.post(`${process.env.REACT_APP_API}/blog`, comntsendtoapi,
        {
          headers: {
            'Authorization': `${getparentidCookies.token}`
          }
        });

      // Handle the response as needed
      toast.success("Form Submited Successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      reset()

      // Add additional logic or redirect the user if needed
    } catch (error) {
      // Handle errors
      console.error("Error sending form data:", error);
      toast.error("Please Fill Correct Details", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }

  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog-Rumeno</title>
        <link rel="canonical" href="https://www.rumeno.in/blog" />
      </Helmet>
      <ul className="d-none">
        {KeysWords.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <a
        className="d-none"
        href="https://www.amazon.in/Sheep-Goat-Feed/b?ie=UTF8&node=28179044031"
      ></a>
      <a
        className="d-none"
        href="https://www.amazon.in/goat-medicine/s?k=goat+medicine"
      ></a>
      <a
        className="d-none"
        href="https://www.amazon.in/goat-farming-accessories/s?k=goat+farming+accessories"
      ></a>
      <a
        className="d-none"
        href="https://www.amazon.in/cow-farm-equipment/s?k=cow+farm+equipment"
      ></a>
      <a
        className="d-none"
        href="https://www.amazon.in/cow-feed/s?k=cow+feed"
      ></a>
      <a
        className="d-none"
        href="https://www.amazon.in/cattle-medicine/s?k=cattle+medicine"
      ></a>
      <a
        className="d-none"
        href="https://www.indiamart.com/shakyaworldtrade/goat-farming-equipment-and-accessories.html"
      ></a>
      <a
        className="d-none"
        href="https://www.flipkart.com/search?q=goat%20feed&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"
      ></a>
      <a
        className="d-none"
        href="https://www.flipkart.com/search?q=goat%20equipment&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off"
      ></a>
      <a
        className="d-none"
        href="https://www.flipkart.com/search?q=cow%20equipment&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off"
      ></a>
      <div className="desk-nav">
        <Navbar size={cart?.length} />
      </div>
      <div className="mob-nav">
        <ResponsiveNavbar size={cart?.length} />
      </div>
      <section className="container-fluid service-bg overflow-hidden">
        <div
          className="section-header text-center mx-auto mb-3 pt-5"
          data-wow-delay="0.1s"
        >
          <div
            className="d-flex justify-content-center pt-5 mt-lg-5"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="mx-2">
              <div className="services-line-largeleft"></div>
              <div className="services-line-smallleft"></div>
            </div>
            <span className="label-title">Blog</span>
            <div className="mx-2">
              <div className="services-line-largeright"></div>
              <div className="services-line-smallright"></div>
            </div>
          </div>
        </div>
        <div className="container-fluid m-auto ">
          <div className="row px-2 justify-content-around">
            <div className="col-lg-9 bg-white shadow">
            <hr className="m-4 text-dark" />
              <div className='text-trun-blog' dangerouslySetInnerHTML={{ __html: blogData?.content }} />
              <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quo ab, iure animi fugiat tenetur debitis unde aliquam commodi quibusdam laboriosam, harum et nisi hic ad explicabo minus voluptatibus dolor.
              Cum laudantium quo consequuntur explicabo inventore, corrupti asperiores corporis debitis reiciendis nemo ipsum, ipsa rem repudiandae, amet est qui quod adipisci. Culpa harum suscipit officia fuga enim facilis qui? Sed?
              Quas nobis voluptate aliquid, nemo laboriosam ullam. Dicta nobis eos eum in unde. Recusandae eligendi sapiente omnis corrupti quaerat veritatis eos officiis, doloremque et minima corporis alias. Amet, expedita! Doloremque.
              Quis consequatur fugit quod repellendus nemo illum sequi ducimus, fugiat eligendi ipsum nulla blanditiis earum minus deleniti mollitia harum aliquid accusantium. Modi aliquam libero pariatur? Iure nihil odit voluptatum laborum.
              Aliquam sed, in eos necessitatibus nihil dolore, veritatis excepturi, eveniet asperiores iure facilis possimus blanditiis corporis quo! Blanditiis, deserunt, nemo tempora aperiam reiciendis quis exercitationem eum beatae, consequatur adipisci culpa.
              Adipisci, quasi in. Reiciendis cum dignissimos enim maxime ipsa culpa dolorum officia exercitationem deserunt quas, molestias obcaecati omnis, aspernatur libero consequatur molestiae asperiores quis quo nemo vitae facilis similique iure?
              Omnis voluptatum quo saepe in illum esse voluptatem necessitatibus dolores, quasi error perferendis unde quod facere. Cupiditate, est? Eius officiis voluptatibus illo consequatur similique numquam veniam architecto animi, nam dolores!
              Exercitationem, impedit? Animi maiores delectus optio rerum iusto. Eius et aliquam quo ea ullam totam quae quos assumenda dolores enim similique error dolorem, quam nam expedita beatae dolore culpa pariatur?
              Deserunt aperiam error sapiente. Ullam repudiandae, accusamus animi excepturi neque omnis molestiae natus voluptates, exercitationem quibusdam culpa non nostrum deserunt veniam sequi labore consectetur quas. Sit aliquid ad optio excepturi.
              Incidunt harum praesentium aliquid, alias optio rem id, neque officia a eum commodi totam ratione suscipit mollitia molestias? Animi aperiam minus velit esse dolorum corrupti saepe impedit pariatur, quia sunt.</p>
            </div>
            <div className="col-lg-2 bg-white border shadow h-100  px-1">
              <ul className="list-unstyled my-2">
              {blogdata?.map((item, index) => (
                <>
                <li key={index} className="fw-bold fs-6 text-trun-head">
                {item.heading}
                  </li>
                <hr className="my-2" />
                </>
              ))}
              </ul>

            </div>
          </div>
        </div>


        <form className="container mt-5  justify-content-center bg-white" onSubmit={handleSubmit(onSubmit)}>
          <div className="row py-5 px-4">
            <h4 className="mb-3"> For Any Comment</h4>
            <hr />
            <div className="col-lg-6">
              <div className="col-lg-8 my-3">
                <div>
                  <label className="form-label px-2" htmlFor="blogname">
                    Name
                  </label>
                </div>
                <input
                  placeholder="Name"
                  type="text"
                  id="blogname"
                  className="form-control"
                  {...register("blogname")}
                />
              </div>
              <div className="col-lg-8 my-3">
                <div>
                  <label className="form-label px-2" htmlFor="blogemail">
                    Email
                  </label>
                </div>
                <input
                  placeholder="Email"
                  type="email"
                  id="blogemail"
                  className="form-control"
                  {...register("blogemail")}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="col-lg-10 my-3">
                <label htmlFor="blogcomment" className="form-label">
                  Any Comment
                </label>
                <textarea
                  className="form-control"
                  id="blogcomment"
                  {...register("blogcomment")}
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-auto mt-3">
                Submit
              </button>
            </div>
          </div>

        </form>
      </section>
      <Footer />
    </>
  );
};

export default BlogContent;
