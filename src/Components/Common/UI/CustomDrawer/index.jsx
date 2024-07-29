import { Button, Drawer } from "rsuite";

const CustomDrawer = ({
  children,
  onClose,
  open,
  className,
  isHeaderTitle,
  isHeaderSeparator = false,
  isFooterButtons = false,
  handleClickButton1,
  clickButtonText1,
  handleClickButton2,
  clickButtonText2,
  ...props
}) => {
  return (
    <Drawer open={open} onClose={onClose} {...props}>
      <Drawer.Header className={`${!isHeaderSeparator && "border-0"}`}>
        {isHeaderTitle && <Drawer.Title>{isHeaderTitle}</Drawer.Title>}
      </Drawer.Header>
      <Drawer.Body
        className={`no-scrollbar ${className && className}`}
        style={{ height: `${!isHeaderSeparator && "100%"}` }}
      >
        {children}
      </Drawer.Body>
      {isFooterButtons && (
        <Drawer.Actions className="drawer-footer">
          <div className="form-btns d-flex gap-3">
            <Button
              className="form-cancel btn w-100 flex-grow-1 rs-btn rs-btn-default text-uppercase"
              onClick={handleClickButton1}
            >
              {clickButtonText1}
            </Button>
            <Button
              className="form-Save btn w-100 flex-grow-1 rs-btn rs-btn-default text-uppercase"
              onClick={handleClickButton2}
            >
              {clickButtonText2}
            </Button>
          </div>
        </Drawer.Actions>
      )}
    </Drawer>
  );
};

export default CustomDrawer;
