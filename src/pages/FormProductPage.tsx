import i18njs from "../i18nj";
import "../css/form.css";
import { Title } from "../components/Title";
import { useCallback, useEffect, useState } from "react";
import { Products } from "../interfaces/products";
import productService from "../services/products";
import { notificationMessage } from "../helpers/notificationMessage";
import { useHistory, useParams } from "react-router-dom";

interface IParams {
  id : string
}

export const FormProductPage = () => {
  const [valueForm, setValueForm] = useState<Products>({
    name: "",
    price: 0,
    image: "",
    description: "",
  });

  const [loading, setLoading] = useState(false)
  
  const params = useParams<IParams>()
  const history = useHistory()
  
  type inputChange = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

  const handlenChangeValue = useCallback((e: inputChange) => {
      setValueForm({
        ...valueForm,
        [e.target.name]: e.target.value,
      });
    },
    [valueForm]
  );

  const { image, description, name, price } = valueForm;

  const handlenClickValue = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setLoading(true)

      const data = await productService.createProduct(valueForm);

      if (params.id) {
        await productService.editProduct(params.id , valueForm)
        history.push('/')
        return notificationMessage('Success' , 'Product edited' , 'success')
      }

      setValueForm({
        name: "",
        description: "",
        image: "",
        price: 0,
      });
      setLoading(false)
      if (data?.message) {
        return notificationMessage("Error", data.message, "danger");
      }
      if (data) {
        return notificationMessage("Succes", "Product created", "success");
      }

      setLoading(false)
    },
    [valueForm , params.id , history]
  );
  
  
  useEffect(() => {
    if (params.id) {
      productService.getProductById(params.id).then(product => {
        setValueForm(product!)
      })
    }
  }, [params.id])
  

  return (
    <>
      <div className="cont-form">
        <Title title={ params.id ? i18njs.t("editProduct") : 'addProduct'} subTitle="" />

        <form onSubmit={handlenClickValue}>
          <div className="contInputs">
            <label>{i18njs.t("name")}</label>
            <input
              type="text"
              name="name"
              value={name}
              className="input"
              placeholder="Name"
              autoFocus
              autoComplete="off"
              onChange={handlenChangeValue}
            />
          </div>

          <div className="contInputs">
            <label>{i18njs.t("price")}</label>
            <input
              type="number"
              name="price"
              value={price}
              placeholder="Price"
              className="input"
              autoComplete="off"
              onChange={handlenChangeValue}
            />
          </div>

          <div className="contInputs">
            <label>{i18njs.t("description")}</label>
            <textarea
              name="description"
              className="input"
              value={description}
              placeholder="Description"
              autoComplete="off"
              onChange={handlenChangeValue}
            />
          </div>

          <div className="contInputs">
            <label>{i18njs.t("image")}</label>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={image}
              className="input"
              autoComplete="off"
              onChange={handlenChangeValue}
            />
          </div>
          <button 
          className = {`${loading ? 'btn disable' : 'btn'}`}>
          {params.id ? i18njs.t('editProduct') : i18njs.t('addProduct')}
          </button>
        </form>
      </div>
    </>
  );
};
