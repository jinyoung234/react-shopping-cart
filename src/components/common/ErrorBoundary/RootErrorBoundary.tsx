import React from 'react';

<<<<<<< HEAD
import * as Styled from './ErrorFallback/ErrorFallback.styled';

interface ErrorBoundaryProps extends React.PropsWithChildren {}
=======
interface ErrorBoundaryProps extends React.PropsWithChildren {
  fallback: React.ReactNode;
}
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320

interface ErrorBoundaryType {
  hasError: boolean;
}

class RootErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryType> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
    this.captureReject = this.captureReject.bind(this);
  }

  componentDidCatch(): void {
    this.setState({ hasError: true });
  }

  componentDidMount() {
    window.addEventListener('unhandledrejection', this.captureReject);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.captureReject);
  }

  captureReject() {
    this.setState({ hasError: true });
  }

  render() {
<<<<<<< HEAD
    if (this.state.hasError) {
      return (
        <Styled.ErrorFallbackWrapper>
          <Styled.ErrorFallbackTitle>에러가 발생했습니다.</Styled.ErrorFallbackTitle>
          <Styled.ErrorFallbackButton onClick={() => window.location.reload()}>
            다시 시도하기
          </Styled.ErrorFallbackButton>
        </Styled.ErrorFallbackWrapper>
      );
    }
=======
    if (this.state.hasError) return this.props.fallback;

>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
    return this.props.children;
  }
}

export default RootErrorBoundary;
