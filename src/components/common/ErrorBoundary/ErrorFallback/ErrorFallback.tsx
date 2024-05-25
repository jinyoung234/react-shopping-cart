import { HTTP_ERROR_MESSAGE } from '@constants/http';
<<<<<<< HEAD
=======
import { Modal } from '@jinyyy/simple-modal';
import { useState } from 'react';
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320

import * as Styled from './ErrorFallback.styled';

export const hasKeyInObject = <T extends object>(obj: T, key: string | number | symbol): key is keyof T => {
  return key in obj;
};

export interface ErrorProps {
  statusCode: number;
  onResetError?: () => void;
}

<<<<<<< HEAD
const ErrorFallback = ({ statusCode, onResetError }: ErrorProps) => {
  const isHTTPError = hasKeyInObject(HTTP_ERROR_MESSAGE, statusCode);

  if (!isHTTPError) return null;

  return (
    <Styled.ErrorFallbackWrapper>
      <Styled.ErrorFallbackTitle>{HTTP_ERROR_MESSAGE[statusCode].body}</Styled.ErrorFallbackTitle>
      <Styled.ErrorFallbackButton onClick={onResetError}>
        {HTTP_ERROR_MESSAGE[statusCode].button}
      </Styled.ErrorFallbackButton>
    </Styled.ErrorFallbackWrapper>
=======
const ErrorFallbackModalContentStyle = { height: 'initial' };

const ErrorFallback = ({ statusCode, onResetError }: ErrorProps) => {
  const isHTTPError = hasKeyInObject(HTTP_ERROR_MESSAGE, statusCode);

  const [isOpen, setIsOpen] = useState(true);

  const handleCloseButton = () => {
    setIsOpen((prev) => !prev);

    if (onResetError) onResetError();
  };

  if (!isHTTPError) return null;

  return (
    <Modal position="center" isOpen={isOpen} onToggle={handleCloseButton}>
      <Modal.ModalContent style={ErrorFallbackModalContentStyle}>
        <Styled.ErrorFallbackTitle>{HTTP_ERROR_MESSAGE[statusCode].body}</Styled.ErrorFallbackTitle>
      </Modal.ModalContent>
      <Modal.ModalFooter direction="row">
        <Modal.ModalButton color="primary" onClick={onResetError}>
          {HTTP_ERROR_MESSAGE[statusCode].button}
        </Modal.ModalButton>
      </Modal.ModalFooter>
    </Modal>
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
  );
};

export default ErrorFallback;
