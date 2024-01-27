import { useState } from 'react';
import axios from 'axios'; // Make sure to import axios if not already done
import styles from '../../../styles/module.css/add_page.module.css';
import componentStyles from '../../../styles/module.css/components.module.css';
import Layout from './Layout';

const grid_name = 'item';

const Sell = ({appData, userId}) => {
  const categories = appData?.categories
  const categoryNames = categories?.map(category => category.name) || [];
  const not_item = ['status','sellerId']
  const [error, setError] = useState(null);
  const [item, setItem] = useState({
    name: { type: String, value: '', text: 'Item Name' },
    description: { type: String, value: '', text: 'Description' },
    image: { type: 'file', value: null, text: 'Image' }, 
    price: { type: 'Integer', value: '', text: 'Price' },
    status: {value: 'In Stock'},
    category: { type: 'select', value: 'in stock', text: 'Category', options: categoryNames },
    sellerId: {value: userId}
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'picture') {
      const imageFile = e.target.files[0];
      setItem((prev) => ({
        ...prev,
        picture: { ...prev.picture, value: imageFile },
      }));
    } else {
      setItem((prev) => ({
        ...prev,
        [name]: { ...prev[name], value: value },
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const missingField = Object.keys(item).find((key) => !item[key].value);

    if (missingField) {
      setError(`Missing ${item[missingField].text}`);
    } else {
      try {
        // Assuming post_url is a defined function
        const the_route = post_url('items');
        const formData = new FormData();

        for (const key in item) {
          if (item[key].type === 'file') {
            formData.append(key, item[key].value);
          } else {
            formData.append(key, JSON.stringify(item[key].value));
          }
        }

        const response = await axios.put(the_route, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 200) {
          setError('Item updated successfully');
        } else {
          setError('Failed to submit item');
        }
      } catch (error) {
        console.error('Error submitting item:', error);
        setError('Failed to submit item');
      }
    }
  };

  return (
    <Layout page_name='Add item'>
      <div className={styles.add_page}>
        <form onSubmit={handleSubmit} className={styles[grid_name]}>
          {error && <p className={styles.error}>{error}</p>}
          <section className={styles[grid_name]}>
            {Object.keys(item).map((key, index) => {
              if (!not_item.includes(key)) {
                return(
                  <div key={index}>
                  <label> {item[key].text}</label>
                  <br />
                  {item[key].type === 'select' ? (
                    <select value={item[key].value} onChange={handleChange} className={styles[key]} name={key} required>
                      {item[key].options.map((option, the_index) => (
                        <option key={the_index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : item[key].type === 'file' ? (
                    <input
                      type={item[key].type}
                      name={key}
                      onChange={handleChange}
                      accept='image/*'
                      required
                    />
                  ) : (
                    <input
                      type={item[key].type}
                      name={key}
                      value={item[key].value}
                      className={styles[key]}
                      onChange={handleChange}
                      placeholder={`${item[key].text} ...`}
                      required
                    />
                  )}
                </div>
                )
              }
            })}
          </section>
          <br />
          <button className={componentStyles.add_button} type='submit'>
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Sell;
