import CardMenu from './cardMenu';

const MenuSection = () => {
  return (
    <div className="mt-40 flex flex-col w-full items-center gap-5">
      <div className="text-center">
        {' '}
        <p className="text-xs text-red-400 tracking-wide">
          HARGA TERJANGKAU
        </p>
        <h1 className='text-3xl font-extrabold max-w-96"'>
          <span className="text-red-500">Menu </span> Populer
        </h1>
      </div>

      <div className="flex flex-row justify-around w-full">
        <CardMenu image="/bakso-img.png" name="Bakso" variant={5} />
        <CardMenu
          image="/mie-ayam-img.png"
          name="Mie Ayam"
          variant={2}
        />
        <CardMenu
          image="/minuman-img-1.png"
          name="Minuman"
          variant={4}
        />
        <CardMenu
          image="/bakso-lengkap-img.png"
          name="Semua"
          variant={11}
        />
      </div>
    </div>
  );
};

export default MenuSection;
