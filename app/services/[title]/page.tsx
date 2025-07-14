const Service = async ({ params }: { params: { title: string } }) => {
  const { title } = await params;
  return (
    <>
      <h3>Hey there {title}</h3>
    </>
  );
};
export default Service;
