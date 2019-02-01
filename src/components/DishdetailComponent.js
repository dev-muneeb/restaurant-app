import React from 'react';
import { 
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle 
} from 'reactstrap';

  function RenderDish({dish}) {
      if (dish != null)
          return(
              <Card>
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
          );
      else
          return '';
  }

  function RenderComments({comments}) {
    if (comments != null)
      return(
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.map((comment) => {
              const date =  new Intl.DateTimeFormat(
                  'en-US', { year: 'numeric', month: 'short', day: '2-digit'}
              ).format(new Date(Date.parse(comment.date)));
              return (
              <li>
                <p>{comment.comment}</p>
                <p>{`--${comment.author}, ${date}`}</p>
              </li>
              );
            })}
          </ul>
        </div>
      );
  else
      return '';
  }

  const DishDetail = (props) => {
      if(props.dish) 
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>
        </div>
        );
    else
        return '';
  }

export default DishDetail;