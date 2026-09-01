import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '🛍️ 商城与衣橱',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        支持时装分类、试穿、金币或点券购买，并可在衣橱中按槽位管理已拥有时装。
      </>
    ),
  },
  {
    title: '🔑 权限直接解锁',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        配置 permission 后，拥有对应权限的玩家无需购买即可使用时装；权限失效时会清理无持久化拥有记录的穿戴状态。
      </>
    ),
  },
  {
    title: '🎭 模型与视觉替换',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        使用数据包替换客户端外观，保留真实装备属性；Balloon 和 Backpack 可选择 ModelEngine 或 BetterModel。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
