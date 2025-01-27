// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   output: "export",
// //   images: {
// //     unoptimized: true,
// //   },
// //   async rewrites() {
// //     return [
// //       {
// //         source: '/api/:path*',
// //         destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`
// //       }
// //     ]
// //   }
// // };

// // module.exports = nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true
//   },
//   async headers() {
//     return [
//       {
//         source: '/api/:path*',
//         headers: [
//           { key: 'Access-Control-Allow-Credentials', value: 'true' },
//           { key: 'Access-Control-Allow-Origin', value: '*' },
//           { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
//           { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
//         ],
//       },
//     ];
//   },
// }

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  // Enable experimental features if needed
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
