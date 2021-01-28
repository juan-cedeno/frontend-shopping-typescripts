import { useCallback } from "react";
import { useHistory } from "react-router-dom";
//@ts-ignore
import Swal from 'sweetalert2'

import "../css/action.css";

interface IProps {
  id: string;
  deletedProduct: (id: string) => void;
}

export const ProductAction = (props: IProps) => {
  const { id, deletedProduct } = props;

  const history = useHistory();

  const handlenDeleted = useCallback(() => {

     Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Yes, delete it!'
        }).then((result : any) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your product has been deleted.',
              'success'
            )
            deletedProduct(id);
          }
        })


  }, [id, deletedProduct]);

  const handlenEdit = useCallback(() => {

    history.push(`/edit-product/${id}`);

  }, [history, id]);

  return (
    <div className="action">

      <button onClick={handlenEdit} className="edit">
        <i className="far fa-edit"></i>
      </button>

      <button onClick={handlenDeleted} className="delete">
        <i className="far fa-trash-alt"></i>
      </button>

    </div>
  );
};
