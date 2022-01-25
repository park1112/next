import { Grid } from "semantic-ui-react";
import styles from "./ItemList.module.css";
import Link from "next/link";

export default function ItemList({ list }) {
    return (
      <div>
        <Grid columns={3}>
          <Grid.Row>
            {list.map((item) => (
              <Grid.Column key={item.id}>
                <Link href={`/view/${item.id}`}>
                    {/* 각 아이템들의 아이디로 갈수 있도록 한다 .  */}
                  <a>
                    <div className={styles.wrap}>
                      <img
                        src={item.image_link}
                        alt={item.name}
                        className={styles.img_item}
                      />
                      <strong className={styles.tit_item}>{item.name}</strong>
                      <span className={styles.txt_info}>
                        {item.category} {item.product_type}
                      </span>
                      <strong className={styles.num_price}>${item.price}</strong>
                    </div>
                  </a>
                </Link>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </div>
    );
  }