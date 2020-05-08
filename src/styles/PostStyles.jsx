import styled from "styled-components";
import tw from "tailwind.macro";

export const Article = styled.section`
  ${tw`px-8 break-words md:mt-12 mb-16`}
`;

export const ArticleHeader = styled.h2`
  ${tw`text-4xl text-gray-800 font-black leading-snug mb-2`}
`;

export const ArticleDescription = styled.p`
  ${tw`text-gray-800 leading-relaxed text-lg xl:text-xl `}
`;

export const ArticleDate = styled.p`
  ${tw`text-lg text-gray-500 mb-2 lg:mb-4`}
`;
export const ArticleH2 = styled.h2`
  ${tw`text-gray-800 mt-6 mb-2 -ml-1 text-2xl font-extrabold tracking-wider`}
`;

export const ArticleH3 = styled.h3`
  ${tw`text-gray-800 mt-6 mb-2 -ml-1 text-xl font-bold`}
`;

export const ArticleH4 = styled.h4`
  ${tw`text-gray-800 mt-6 mb-2 -ml-1 text-lg font-semibold`}
`;

export const ArticleH5 = styled.h5`
  ${tw`text-gray-800 mt-6 mb-2 -ml-1 text-lg font-medium`}
`;

export const ArticleH6 = styled.h6`
  ${tw`text-gray-800 mt-6 mb-2 -ml-1 text-base font-semibold`}
`;

export const ArticlePara = styled.p`
  ${tw`text-gray-800 leading-relaxed text-lg xl:text-xl mt-2 mb-4 break-words`}
`;

export const ArticleBlockQuote = styled.blockquote`
  ${tw`border-solid border-l-4 border-gray-300 pl-4`}
`;

export const ArticleUl = styled.ul`
  ${tw`list-disc m-4`}
`;

export const ArticleOl = styled.ol`
  ${tw`list-decimal m-4`}
`;

export const ArticleLi = styled.li`
  ${tw`text-gray-800 font-light my-1`}
`;

export const ArticleStrong = styled.strong`
  ${tw`font-semibold`}
`;

export const ArticleEm = styled.em`
  ${tw`italic`}
`;

export const ArticleA = styled.a`
  ${tw`text-blue-700 leading-relaxed font-medium mb-8 hover:text-blue-500`}
`;
