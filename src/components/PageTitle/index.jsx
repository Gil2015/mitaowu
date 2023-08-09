import './style.less';

const PageTitle = ({ title }) => {
  return (
    <div class="page-title">
      <h1 class="h1">{title}</h1>
      <i class="line" />
    </div>
  );
};

export default PageTitle;
