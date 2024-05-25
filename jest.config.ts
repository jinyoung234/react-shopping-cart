export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@domain/(.*)$': '<rootDir>/src/domain/$1',
    '^@routes/(.*)$': '<rootDir>/src/routes/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@apis/(.*)$': '<rootDir>/src/apis/$1',
    '^@appTypes/(.*)$': '<rootDir>/src/appTypes/$1',
    '^@errors/(.*)$': '<rootDir>/src/errors/$1',
    '^@recoil/(.*)$': '<rootDir>/src/recoil/$1',
<<<<<<< HEAD
  },
  testPathIgnorePatterns: ['<rootDir>/__tests__/constants/'],
=======
    '^@validation/(.*)$': '<rootDir>/src/validation/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/__tests__/constants/', '<rootDir>/__tests__/utils/'],
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
};
