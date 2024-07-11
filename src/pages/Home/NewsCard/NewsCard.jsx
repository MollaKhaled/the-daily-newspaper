import moment from 'moment';
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShareAlt, FaRegBookmark, FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';



const NewsCard = ({ news }) => {
  const { title, details, rating, total_view, author, img, thumbnail_url, image_url, _id, category_id } = news;
  return (
    <Card className='mb-4'>
      <Card.Header className='d-flex align-items-center'>
        <Image style={{ height: '40px' }} src={author.img} roundedCircle />
        <div className='ps-2 flex-grow-1'>
          <p className='mb-0'>{author.name}</p>
          <p><small>{moment(author?.published_date).format("yyyy-MM-D")}</small></p>
        </div>
        <div className=''>
          <FaRegBookmark></FaRegBookmark><FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? <> {details}</> :
            <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className='d-flex' >
        <div className='flex-grow-1'>
        
            <Rating
              placeholderRating={rating.number}
              readonly
              emptySymbol={<FaRegStar></FaRegStar> }
              placeholderSymbol={<FaStar className='text-warning'></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            >
          </Rating>
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye></FaEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;