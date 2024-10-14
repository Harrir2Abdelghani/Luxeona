import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation,Link } from 'react-router-dom';
import { FaHome, FaShoppingBag, FaHeart, FaUser } from 'react-icons/fa';
import dress1 from '../Components/Assets/dress-collection.jpg';
import Tshirt from '../Components/Assets/output.png'

const UserPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (!token) {
      navigate('/signin');
    }
  }, [navigate]);
  const [currentContent, setCurrentContent] = useState({
    image: dress1,
    title: 'Wedding Dress',
    description: 'New princess bride wedding dress.',
  });

  const contents = [
    {
      image: dress1,
      title: 'Wedding Dress',
      description: 'New princess bride wedding dress.',
    },
    {
      image: Tshirt,
      title: 'Elegant T-Shirt',
      description: 'Shimmering T-shirt set.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prevContent) =>
        prevContent.image === dress1 ? contents[1] : contents[0]
      );
    }, 4000); 

    return () => clearInterval(interval); 
  }, []);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizStart = () => {
    setShowQuiz(true);
  };

  const handleAnswerSelect = (answer) => {
    setAnswers([...answers, answer]);
    if (quizStep < 4) {
      setQuizStep(quizStep + 1);
    } else {
      calculateResult([...answers, answer]);
    }
  };

  const calculateResult = (answers) => {
    let style = '';
    const brightBold = answers.filter((ans) => ans === 'Bright and Bold').length;
    const neutralCalm = answers.filter((ans) => ans === 'Neutral and Calm').length;
    const darkEdgy = answers.filter((ans) => ans === 'Dark and Edgy').length;

    if (brightBold > neutralCalm && brightBold > darkEdgy) {
      style = 'Bold & Colorful';
    } else if (neutralCalm > brightBold && neutralCalm > darkEdgy) {
      style = 'Classic & Elegant';
    } else {
      style = 'Edgy & Modern';
    }
    setQuizResult(style);
  };

  const closeModal = () => {
    setShowQuiz(false);
    setQuizStep(1);
    setAnswers([]);
    setQuizResult(null);
  };
  
  return (
    <div className="flex flex-col items-center mb-6 p-6 text-xl bg-gray-200 min-h-screen  ">
      <div className="flex flex-col font-dancing  fixed space-y-20 top-32 -left-9 sm:left-0 lg:-left-10 p-4">
        <p className="rotate-90 transition duration-300 text-2xl ease-in-out cursor-pointer   font-bold">Popular</p>
        <p className="rotate-90 transition duration-300 text-2xl ease-in-out cursor-pointer   font-bold">Vintage</p>
        <p className="rotate-90 transition duration-300 text-2xl ease-in-out cursor-pointer   font-bold">Wedding</p>
      </div>

      <section className="bg-transparent w-full text-deepPlum p-4 text-center ">
        <h2 className="text-xl text-roseGold font-bold font-mono">Welcome ... ✨</h2>
      </section>
      <div className="relative bg-transparent p-10 max-w-xs lg:max-w-lg w-full mb-6 duration-300 ease-in-out">

  <div className="relative w-full h-72 overflow-hidden rounded-lg">
        <img
          src={currentContent.image}
          alt={currentContent.title}
          className="absolute w-full h-72 object-cover rounded-lg transition-all duration-1000 ease-in-out hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold text-center text-deepPlum transition-all duration-1000 ease-in-out">
          {currentContent.title}
        </h3>
        <p className="text-sm text-gray-500 mt-2 text-center transition-all duration-1000 ease-in-out">
          {currentContent.description}
        </p>
      </div>
</div>
      <hr className="border-t-2 border-roseGold mt-4 mb-6 w-1/2 mx-auto" />
<section className="bg-white p-6 m-2 rounded-lg  mb-8 relative">
  <h2 className="text-3xl font-bold mb-4 text-deepPlum font-dancing text-center">
    Editor's Choice
  </h2>
  <p className="text-gray-500 text-center mb-6">
    Curated items, selected just for you.
  </p>
  <div className="grid grid-row-2 gap-8 -mx-2 ">
    <div className="bg-white  -mb-2 rounded-lg transform transition-transform hover:scale-105 hover:shadow-lg">
      <div className="relative">
        <img
          src={dress1}
          alt="Product 1"
          className="w-full h-60 object-cover rounded-t-md mb-4"
        />

        <span className="absolute bottom-0 left-0 w-20 h-8  bg-red-500 text-white text-sm font-bold px-1 py-1 rounded-t">
          50% OFF
        </span>
      </div>
      
      <p className="text-sm text-gray-500  mx-3">
        A stylish and elegant dress perfect for any occasion.
      </p>

      <div className="flex items-center text-sm ml-3  my-1">
        <span className="text-deepPlum">★★★★★ 5.0</span>
      </div>

      <div className="flex justify-between items-center w-full mt-4 mb-4">
  <div className="ml-3">
    <span className="text-gray-900 font-bold">2000 Dz</span>
  </div>
      <Link to='/shop'>
      <button className="bg-roseGold text-md mr-3 text-white px-3 py-1 rounded-md hover:bg-deepPlum transition duration-300">
        Rent Now
      </button>
      </Link>
    </div>

    </div>
    <hr className="border-t-2 border-roseGold   w-1/2 mx-auto" />
    <div className="bg-white  -mb-2 rounded-lg transform transition-transform hover:scale-105 hover:shadow-lg">
      <div className="relative">
        <img
          src={Tshirt}
          alt="Product 2"
          className="w-full h-60 object-cover rounded-t-md mb-4"
        />
        <span className="absolute bottom-0 left-0 w-20 h-8  bg-red-500 text-white text-sm font-bold px-1 py-1 rounded-t">
          30% OFF
        </span>
      </div>
      <p className="text-sm text-gray-500 mx-3">
        Beautiful T-Shirt with intricate designs for a special look.
      </p>

      <div className="flex items-center text-sm ml-3  my-1">
        <span className="text-deepPlum">★★★★☆ 4.0</span>
      </div>

      <div className="flex justify-between items-center w-full mt-4 mb-4">
  <div className="ml-3">
    <span className="text-gray-900 font-bold">1500 Dz</span>
  </div>

  <Link to='/shop' >
  <button className="bg-roseGold text-md mr-3 text-white px-3 py-1 rounded-md hover:bg-deepPlum transition duration-300">
    Rent Now
  </button>
  </Link>
</div>

    </div>
  </div>
</section>

<hr className="border-t-2 border-roseGold mt-6 mb-12 w-1/2 mx-auto" />


<div>
  <section className="bg-white p-6 m-2 rounded-lg shadow-md mb-8 text-center relative overflow-hidden">

    <div className="absolute top-0 right-0 m-4 text-rose-500 text-2xl animate-spin-slow">★</div>
    <div className="absolute bottom-0 left-0 m-4 text-rose-500 text-2xl animate-spin-slow-reverse">★</div>

    <h2 className="text-3xl font-bold mb-4 text-deepPlum font-dancing">Find Your Style</h2>
    <p className="text-gray-600 mb-6">
      Answer a few quick questions to discover your personal style and receive personalized recommendations.
    </p>
    <button
      className="bg-roseGold text-white px-6 py-3 rounded-lg  transition-transform transform hover:scale-105 shadow-lg"
      onClick={handleQuizStart}
    >
      Take the Quiz
    </button>
  </section>


  {showQuiz && (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center transition-opacity duration-500 ease-in-out">
      <div className="bg-roseGold p-8 rounded-2xl shadow-lg w-full max-w-md m-8 mt-10 transform scale-100 animate-fade-in">
        <h3 className="text-3xl font-bold mb-4 font-dancing text-center text-deepPlum">
          Quiz - Step {quizStep}
        </h3>
        <hr className="border-t-2 border-white mt-4 mb-2 w-1/2 mx-auto" />

        <div className="absolute top-4 right-4 text-rose-500 text-2xl animate-star-bounce">★</div>

        {!quizResult ? (
          <div>
            {quizStep === 1 && (
              <div className="mb-6">
                <p className="mb-4 text-white text-center">What color palette do you prefer?</p>
                <div className="flex justify-center">
                  <button
                    className="bg-gray-100 text-black w-48 text-center px-4 mb-2 py-2 rounded-lg hover:bg-deepPlum transition-transform transform hover:scale-105"
                    onClick={() => handleAnswerSelect('Bright and Bold')}
                  >
                    Bright & Bold
                  </button>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-gray-100 text-black w-48 text-center px-4 mb-2 py-2 rounded-lg hover:bg-deepPlum transition-transform transform hover:scale-105"
                    onClick={() => handleAnswerSelect('Neutral and Calm')}
                  >
                    Neutral & Calm
                  </button>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-gray-100 text-black w-48 text-center px-4 mb-2 py-2 rounded-lg hover:bg-deepPlum transition-transform transform hover:scale-105"
                    onClick={() => handleAnswerSelect('Dark and Edgy')}
                  >
                    Dark & Edgy
                  </button>
                </div>
              </div>
            )}

            {quizStep === 2 && (
              <div className="mb-6">
                <p className="mb-4 text-white text-center">What type of clothing do you feel most comfortable in?</p>
                <div className="flex justify-center">
                  <button
                    className="bg-gray-100 text-black w-48 text-center px-4 mb-2 py-2 rounded-lg hover:bg-deepPlum transition-transform transform hover:scale-105"
                    onClick={() => handleAnswerSelect('Casual and Relaxed')}
                  >
                    Casual & Relaxed
                  </button>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-gray-100 text-black w-48 text-center px-4 mb-2 py-2 rounded-lg hover:bg-deepPlum transition-transform transform hover:scale-105"
                    onClick={() => handleAnswerSelect('Elegant and Formal')}
                  >
                    Elegant & Formal
                  </button>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-gray-100 text-black w-48 text-center px-4 mb-2 py-2 rounded-lg hover:bg-deepPlum transition-transform transform hover:scale-105"
                    onClick={() => handleAnswerSelect('Trendy and Modern')}
                  >
                    Trendy & Modern
                  </button>
                </div>
              </div>
            )}

            {quizStep === 3 && (
              <div className="mb-6">
                <p className="mb-4 text-center text-white">What kind of patterns do you like?</p>
                <div className="flex justify-center">
                  <button
                    className="bg-gray-100 text-black w-48 px-4 py-2 mb-2 rounded-lg hover:bg-deepPlum transition-transform transform hover:scale-105"
                    onClick={() => handleAnswerSelect('Floral and Intricate')}
                  >
                    Floral & Intricate
                  </button>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-gray-100 text-black w-48 px-4 mb-2 py-2 rounded-lg hover:bg-deepPlum transition-transform transform hover:scale-105"
                    onClick={() => handleAnswerSelect('Simple and Minimalistic')}
                  >
                    Simple
                  </button>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-gray-100 text-black w-48 mb-2 px-4 py-2 rounded-lg hover:bg-deepPlum transition-transform transform hover:scale-105"
                    onClick={() => handleAnswerSelect('Geometric and Abstract')}
                  >
                    Abstract
                  </button>
                </div>
              </div>
            )}

            {quizStep === 4 && (
              <div className="mb-6">
                <p className="mb-4 text-center text-white">What fabric texture do you prefer?</p>
                <div className="flex justify-center">
                  <button
                    className="bg-gray-100 text-black w-48 mb-2 px-4 py-2 rounded-lg hover:bg-deepPlum transition-transform transform hover:scale-105"
                    onClick={() => handleAnswerSelect('Soft and Flowing')}
                  >
                    Soft & Flowing
                  </button>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-gray-100 text-black w-48 mb-2 px-4 py-2 rounded-lg hover:bg-deepPlum transition-transform transform hover:scale-105"
                    onClick={() => handleAnswerSelect('Structured and Crisp')}
                  >
                    Structured
                  </button>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-gray-100 text-black w-48 mb-2 px-4 py-2 rounded-lg hover:bg-deepPlum transition-transform transform hover:scale-105"
                    onClick={() => handleAnswerSelect('Cozy and Knitted')}
                  >
                    Cozy & Knitted
                  </button>
                </div>
              </div>
            )}

            <div className="flex justify-center mt-6">
              <button
                className="bg-deepPlum text-white px-6 py-2 rounded-lg hover:bg-roseGold transition-transform transform hover:scale-105"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="mb-6 text-center">Your style is: <span className="font-bold text-white">{quizResult}</span></p>
            <div className="flex justify-center">
              <button
                className="bg-deepPlum text-white px-6 py-2 rounded-lg  transition-transform transform hover:scale-105"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )}
</div>

      <div className="fixed bottom-0 left-0 right-0 bg-roseGold p-0 shadow-lg flex justify-around items-center space-x-8 rounded-t-3xl ">
        <Link to="/user">
          <button
            className={`group flex flex-col items-center font-bold p-2 transition duration-300 ease-in-out
              ${location.pathname === '/user' ? ' text-white scale-105' : 'text-deepPlum hover:scale-105'}`}
          >
            <FaHome className="text-2xl mb-1 transition duration-300" />
          </button>
        </Link>
        <Link to="/shop">
          <button
            className={`group flex flex-col items-center font-bold p-2  transition duration-300 ease-in-out
              ${location.pathname === '/shop' ? ' text-white scale-105' : 'text-deepPlum hover:scale-105'}`}
          >
            <FaShoppingBag className="text-2xl mb-1 transition duration-300" />
          </button>
        </Link>
        <Link to="/favorites">
          <button
            className={`group flex flex-col items-center font-bold p-2  transition duration-300 ease-in-out
              ${location.pathname === '/favorites' ? ' text-white scale-105' : 'text-deepPlum hover:scale-105'}`}
          >
            <FaHeart className="text-2xl mb-1 transition duration-300" />
          </button>
        </Link>
        <Link to="/profile">
          <button
            className={`group flex flex-col items-center font-bold p-2 rounded-3xl transition duration-300 ease-in-out
              ${location.pathname === '/profile' ? 'bg-deepPlum text-white scale-105' : 'text-deepPlum hover:scale-105'}`}
          >
            <FaUser className="text-2xl mb-1 transition duration-300" />
          </button>
        </Link>
      </div>
    </div>
  );
};
export default UserPage;
