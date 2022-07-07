window.BENCHMARK_DATA = {
  "lastUpdate": 1657229133561,
  "repoUrl": "https://github.com/minetest/benchmarks",
  "entries": {
    "Minetest Performance Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "sfan5@live.de",
            "name": "sfan5",
            "username": "sfan5"
          },
          "committer": {
            "email": "sfan5@live.de",
            "name": "sfan5",
            "username": "sfan5"
          },
          "distinct": true,
          "id": "5f9bf04df20c57c6cedd609f4613e5998e9efbc7",
          "message": "test",
          "timestamp": "2022-05-08T20:26:41+02:00",
          "tree_id": "e127c65735d681fe3b532976b5bc09db4f6e0e00",
          "url": "https://github.com/minetest/benchmarks/commit/5f9bf04df20c57c6cedd609f4613e5998e9efbc7"
        },
        "date": 1652034845091,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.01407,
            "range": "± 0.000211",
            "unit": "us",
            "extra": "100 samples\n2106 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.623529,
            "range": "± 0.010151",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.446688,
            "range": "± 0.009440",
            "unit": "us",
            "extra": "100 samples\n66 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.171553,
            "range": "± 0.023953",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.904088,
            "range": "± 0.089072",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 197.5355,
            "range": "± 1.173682",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 143.05482,
            "range": "± 1.089124",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 392.68704,
            "range": "± 1.754082",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.537078,
            "range": "± 0.012703",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.504819,
            "range": "± 0.026743",
            "unit": "us",
            "extra": "100 samples\n20 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.540132,
            "range": "± 0.016814",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.428111,
            "range": "± 0.026464",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 143.99761,
            "range": "± 0.978339",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 655.7244,
            "range": "± 2.420869",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 143.67862,
            "range": "± 1.306270",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 639.19116,
            "range": "± 2.428546",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.01768,
            "range": "± 0.027675",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 6.33448,
            "range": "± 0.134983",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.863574,
            "range": "± 0.022115",
            "unit": "us",
            "extra": "100 samples\n35 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.331297,
            "range": "± 0.215792",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 584.73947,
            "range": "± 6.272172",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5729.96713,
            "range": "± 189.306501",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 434.41253,
            "range": "± 4.053093",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 3997.18508,
            "range": "± 165.970292",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "97950a4ca33f03be98129a86b6de25a612e9507d",
          "message": "Minetest: 8756b7a735084c6a80f5ab031fa1d889528d6fde | Irrlicht: 51ae495c4ad74d4df19534bf2f16b7a469c24bc5",
          "timestamp": "2022-05-15T21:18:55Z",
          "url": "https://github.com/minetest/benchmarks/commit/97950a4ca33f03be98129a86b6de25a612e9507d"
        },
        "date": 1652649937992,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013939,
            "range": "± 0.000234",
            "unit": "us",
            "extra": "100 samples\n2152 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.631654,
            "range": "± 0.013582",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.446782,
            "range": "± 0.012338",
            "unit": "us",
            "extra": "100 samples\n67 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.1684,
            "range": "± 0.024714",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.926088,
            "range": "± 0.091931",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 200.14662,
            "range": "± 1.277743",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 140.57483,
            "range": "± 1.022877",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 398.74327,
            "range": "± 2.704651",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.533721,
            "range": "± 0.010271",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.487469,
            "range": "± 0.029133",
            "unit": "us",
            "extra": "100 samples\n20 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.535328,
            "range": "± 0.010530",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.425971,
            "range": "± 0.046562",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 140.00082,
            "range": "± 2.125585",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 655.68854,
            "range": "± 3.381739",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 141.20482,
            "range": "± 6.325027",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 639.2273,
            "range": "± 2.200099",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.011613,
            "range": "± 0.020991",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 6.311886,
            "range": "± 0.118985",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.862897,
            "range": "± 0.033504",
            "unit": "us",
            "extra": "100 samples\n35 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.306629,
            "range": "± 0.085722",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 588.26874,
            "range": "± 7.664631",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5391.13006,
            "range": "± 22.337746",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 434.47363,
            "range": "± 5.802890",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 3813.31565,
            "range": "± 14.711547",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "20505f0f6028a44729b9265d212fdd893b8416cc",
          "message": "Minetest: af37f9dc542e31f34d53da995ed86f2a3eacd9a5 | Irrlicht: 51ae495c4ad74d4df19534bf2f16b7a469c24bc5",
          "timestamp": "2022-05-17T18:27:49Z",
          "url": "https://github.com/minetest/benchmarks/commit/20505f0f6028a44729b9265d212fdd893b8416cc"
        },
        "date": 1652812500557,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013802,
            "range": "± 0.000164",
            "unit": "us",
            "extra": "100 samples\n2163 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.635451,
            "range": "± 0.013065",
            "unit": "us",
            "extra": "100 samples\n47 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.447645,
            "range": "± 0.016235",
            "unit": "us",
            "extra": "100 samples\n67 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.168278,
            "range": "± 0.022832",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.96185,
            "range": "± 0.238621",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 199.8624,
            "range": "± 1.258488",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 140.603,
            "range": "± 1.277521",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 398.33984,
            "range": "± 4.176740",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.533914,
            "range": "± 0.010837",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.487868,
            "range": "± 0.025973",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.535629,
            "range": "± 0.013363",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.42482,
            "range": "± 0.026856",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 140.177,
            "range": "± 2.049608",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 654.99668,
            "range": "± 2.703640",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 139.50298,
            "range": "± 1.601835",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 639.29256,
            "range": "± 2.483075",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.012274,
            "range": "± 0.025769",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 6.307642,
            "range": "± 0.240184",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.861749,
            "range": "± 0.019465",
            "unit": "us",
            "extra": "100 samples\n35 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.279603,
            "range": "± 0.092482",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 587.68419,
            "range": "± 6.099793",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5361.46516,
            "range": "± 20.534031",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 435.69709,
            "range": "± 4.859073",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 3811.27316,
            "range": "± 16.812353",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "d50644eeeb9f37779ee846fdb4c0308b3241212f",
          "message": "Minetest: 273bfee9a193d0dd2e9f9b400add980c0b5202a7 | Irrlicht: 00a7741cd4f34a084d81e6bbec7edca172d427ee",
          "timestamp": "2022-05-18T12:46:31Z",
          "url": "https://github.com/minetest/benchmarks/commit/d50644eeeb9f37779ee846fdb4c0308b3241212f"
        },
        "date": 1652878418849,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013389,
            "range": "± 0.000223",
            "unit": "us",
            "extra": "100 samples\n2217 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.678826,
            "range": "± 0.008758",
            "unit": "us",
            "extra": "100 samples\n44 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.449461,
            "range": "± 0.016599",
            "unit": "us",
            "extra": "100 samples\n68 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.208174,
            "range": "± 0.027399",
            "unit": "us",
            "extra": "100 samples\n25 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.914084,
            "range": "± 0.147378",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 197.16335,
            "range": "± 1.431902",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 142.21767,
            "range": "± 1.734865",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 397.05367,
            "range": "± 2.454199",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.534185,
            "range": "± 0.009905",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.555218,
            "range": "± 0.038664",
            "unit": "us",
            "extra": "100 samples\n20 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.544952,
            "range": "± 0.020867",
            "unit": "us",
            "extra": "100 samples\n55 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.484446,
            "range": "± 0.027239",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 139.50863,
            "range": "± 1.358615",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 672.66897,
            "range": "± 6.519116",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 139.81867,
            "range": "± 1.470923",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 653.20774,
            "range": "± 4.060285",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.017244,
            "range": "± 0.019727",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 6.335068,
            "range": "± 0.093030",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.864523,
            "range": "± 0.015844",
            "unit": "us",
            "extra": "100 samples\n35 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.37962,
            "range": "± 0.128906",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 567.71896,
            "range": "± 8.564868",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5573.25414,
            "range": "± 195.678660",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 429.98709,
            "range": "± 3.785099",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 3935.93153,
            "range": "± 141.688985",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "ba6ba528d399c76f6a3ba5dcd9d93b3328eab454",
          "message": "Minetest: a4ef62f5b215fe0f23e3e50672f1538854db4ed9 | Irrlicht: 00a7741cd4f34a084d81e6bbec7edca172d427ee",
          "timestamp": "2022-05-20T21:20:33Z",
          "url": "https://github.com/minetest/benchmarks/commit/ba6ba528d399c76f6a3ba5dcd9d93b3328eab454"
        },
        "date": 1653082083736,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.014354,
            "range": "± 0.001016",
            "unit": "us",
            "extra": "100 samples\n2349 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.7354,
            "range": "± 0.067462",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.512503,
            "range": "± 0.079802",
            "unit": "us",
            "extra": "100 samples\n68 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.273897,
            "range": "± 0.152703",
            "unit": "us",
            "extra": "100 samples\n27 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 7.221846,
            "range": "± 0.739525",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 195.22625,
            "range": "± 27.253630",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 158.51303,
            "range": "± 12.138179",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 414.45272,
            "range": "± 45.298533",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.519949,
            "range": "± 0.007943",
            "unit": "us",
            "extra": "100 samples\n55 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.67782,
            "range": "± 0.256508",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.572414,
            "range": "± 0.068768",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.403676,
            "range": "± 0.173939",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 144.56492,
            "range": "± 20.115579",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 676.09241,
            "range": "± 81.792442",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 152.23497,
            "range": "± 18.077344",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 683.34047,
            "range": "± 78.568877",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.080601,
            "range": "± 0.140098",
            "unit": "us",
            "extra": "100 samples\n32 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 6.235844,
            "range": "± 0.803617",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 1.036034,
            "range": "± 0.122920",
            "unit": "us",
            "extra": "100 samples\n36 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.897784,
            "range": "± 0.446996",
            "unit": "us",
            "extra": "100 samples\n8 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 602.03697,
            "range": "± 73.807450",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5920.58574,
            "range": "± 307.886757",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 477.54607,
            "range": "± 43.944833",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 4295.16508,
            "range": "± 190.198683",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "7764fa2180d5755b032abe2d8213b63283462334",
          "message": "Minetest: dc45b85a543b4c8ad72f69a554ecfe7f0a60c533 | Irrlicht: 593103a26148b7154b159b9ae728fd53b4e7ca84",
          "timestamp": "2022-05-21T15:22:41Z",
          "url": "https://github.com/minetest/benchmarks/commit/7764fa2180d5755b032abe2d8213b63283462334"
        },
        "date": 1653147067198,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.016552,
            "range": "± 0.000480",
            "unit": "us",
            "extra": "100 samples\n2153 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.755889,
            "range": "± 0.110588",
            "unit": "us",
            "extra": "100 samples\n49 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.761074,
            "range": "± 1.830475",
            "unit": "us",
            "extra": "100 samples\n69 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.380503,
            "range": "± 0.030066",
            "unit": "us",
            "extra": "100 samples\n27 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 8.402558,
            "range": "± 0.909886",
            "unit": "us",
            "extra": "100 samples\n4 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 244.18058,
            "range": "± 34.085770",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 172.94019,
            "range": "± 11.643061",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 492.02605,
            "range": "± 57.037613",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.645413,
            "range": "± 0.072432",
            "unit": "us",
            "extra": "100 samples\n50 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.816548,
            "range": "± 0.045915",
            "unit": "us",
            "extra": "100 samples\n20 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.642209,
            "range": "± 0.031642",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.773707,
            "range": "± 0.254716",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 181.86777,
            "range": "± 18.763780",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 809.12789,
            "range": "± 24.191730",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 179.70607,
            "range": "± 10.607850",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 839.48673,
            "range": "± 371.243138",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.238785,
            "range": "± 0.193540",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 8.153378,
            "range": "± 0.765997",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 1.046282,
            "range": "± 0.178177",
            "unit": "us",
            "extra": "100 samples\n34 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 5.477963,
            "range": "± 0.487226",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 702.02533,
            "range": "± 43.305726",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 7109.36093,
            "range": "± 768.228758",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 665.73656,
            "range": "± 479.258864",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 4881.15527,
            "range": "± 168.189258",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "cc056cd29364f4ab705e32664ff31f7463f335df",
          "message": "Minetest: 2f32044273d107e82fb1c35d4a0f616fa480cdf0 | Irrlicht: 593103a26148b7154b159b9ae728fd53b4e7ca84",
          "timestamp": "2022-05-21T18:25:34Z",
          "url": "https://github.com/minetest/benchmarks/commit/cc056cd29364f4ab705e32664ff31f7463f335df"
        },
        "date": 1653157960094,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013783,
            "range": "± 0.000441",
            "unit": "us",
            "extra": "100 samples\n2154 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.055094,
            "range": "± 0.002556",
            "unit": "us",
            "extra": "100 samples\n550 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.041245,
            "range": "± 0.000782",
            "unit": "us",
            "extra": "100 samples\n720 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.153509,
            "range": "± 0.003539",
            "unit": "us",
            "extra": "100 samples\n194 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.924954,
            "range": "± 0.166968",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.408127,
            "range": "± 0.023780",
            "unit": "us",
            "extra": "100 samples\n74 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 30.04339,
            "range": "± 0.289958",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 90.14558,
            "range": "± 1.898701",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.120205,
            "range": "± 0.000897",
            "unit": "us",
            "extra": "100 samples\n246 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.273332,
            "range": "± 0.005445",
            "unit": "us",
            "extra": "100 samples\n110 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.111217,
            "range": "± 0.002371",
            "unit": "us",
            "extra": "100 samples\n265 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.243419,
            "range": "± 0.007763",
            "unit": "us",
            "extra": "100 samples\n123 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.90429,
            "range": "± 1.111950",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 193.51337,
            "range": "± 2.244059",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 69.186,
            "range": "± 1.403516",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 184.74165,
            "range": "± 1.898013",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.209836,
            "range": "± 0.006714",
            "unit": "us",
            "extra": "100 samples\n144 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.73006,
            "range": "± 0.006555",
            "unit": "us",
            "extra": "100 samples\n41 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.164941,
            "range": "± 0.008789",
            "unit": "us",
            "extra": "100 samples\n179 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.483778,
            "range": "± 0.009449",
            "unit": "us",
            "extra": "100 samples\n61 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 114.30902,
            "range": "± 2.784908",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 533.91443,
            "range": "± 4.505455",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 86.14453,
            "range": "± 2.199041",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 440.34576,
            "range": "± 3.296135",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "ad697bc8320db9ff805cbeba97adec046d27462b",
          "message": "Minetest: 9f338f5a56e5adee3d11d59827f7e2b8a714e6c2 | Irrlicht: 128cf1696c2803e12ebbdd3ee034e0c9eea90fae",
          "timestamp": "2022-05-22T01:48:52Z",
          "url": "https://github.com/minetest/benchmarks/commit/ad697bc8320db9ff805cbeba97adec046d27462b"
        },
        "date": 1653184577953,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.014085,
            "range": "± 0.000200",
            "unit": "us",
            "extra": "100 samples\n2110 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.058505,
            "range": "± 0.001265",
            "unit": "us",
            "extra": "100 samples\n537 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.047013,
            "range": "± 0.000933",
            "unit": "us",
            "extra": "100 samples\n642 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.157128,
            "range": "± 0.000938",
            "unit": "us",
            "extra": "100 samples\n189 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.931838,
            "range": "± 0.108275",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.404855,
            "range": "± 0.015955",
            "unit": "us",
            "extra": "100 samples\n75 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 29.74366,
            "range": "± 0.463758",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 92.44844,
            "range": "± 0.786449",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.121243,
            "range": "± 0.003116",
            "unit": "us",
            "extra": "100 samples\n247 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.271226,
            "range": "± 0.004483",
            "unit": "us",
            "extra": "100 samples\n111 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.112462,
            "range": "± 0.002659",
            "unit": "us",
            "extra": "100 samples\n271 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.244993,
            "range": "± 0.004643",
            "unit": "us",
            "extra": "100 samples\n123 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.05841,
            "range": "± 0.868898",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 193.09385,
            "range": "± 1.698636",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 67.88029,
            "range": "± 0.508353",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 181.73182,
            "range": "± 1.431577",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.205899,
            "range": "± 0.001301",
            "unit": "us",
            "extra": "100 samples\n147 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.73815,
            "range": "± 0.013698",
            "unit": "us",
            "extra": "100 samples\n41 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.15106,
            "range": "± 0.002660",
            "unit": "us",
            "extra": "100 samples\n201 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.487857,
            "range": "± 0.010592",
            "unit": "us",
            "extra": "100 samples\n62 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 111.21121,
            "range": "± 1.402163",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 549.07912,
            "range": "± 1.731462",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 85.59118,
            "range": "± 0.929623",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 448.3729,
            "range": "± 1.724733",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "8976bb7e7c12df7ff82dac616047956d97cf2a97",
          "message": "Minetest: ac5e8176b9a2b36520bcc78b9d486aea7742d554 | Irrlicht: 128cf1696c2803e12ebbdd3ee034e0c9eea90fae",
          "timestamp": "2022-05-22T15:23:30Z",
          "url": "https://github.com/minetest/benchmarks/commit/8976bb7e7c12df7ff82dac616047956d97cf2a97"
        },
        "date": 1653233458336,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.014049,
            "range": "± 0.000091",
            "unit": "us",
            "extra": "100 samples\n2111 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.055473,
            "range": "± 0.001506",
            "unit": "us",
            "extra": "100 samples\n548 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.046993,
            "range": "± 0.000742",
            "unit": "us",
            "extra": "100 samples\n647 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.158486,
            "range": "± 0.002759",
            "unit": "us",
            "extra": "100 samples\n190 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.93749,
            "range": "± 0.102440",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.406072,
            "range": "± 0.013783",
            "unit": "us",
            "extra": "100 samples\n75 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 29.69735,
            "range": "± 0.336047",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 92.81524,
            "range": "± 1.025063",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.121667,
            "range": "± 0.001998",
            "unit": "us",
            "extra": "100 samples\n248 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.271391,
            "range": "± 0.004199",
            "unit": "us",
            "extra": "100 samples\n111 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.113005,
            "range": "± 0.004063",
            "unit": "us",
            "extra": "100 samples\n272 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.24535,
            "range": "± 0.004020",
            "unit": "us",
            "extra": "100 samples\n124 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.01393,
            "range": "± 0.686029",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 193.38748,
            "range": "± 0.955530",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 67.71688,
            "range": "± 0.460080",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 181.60237,
            "range": "± 1.086666",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.207419,
            "range": "± 0.004379",
            "unit": "us",
            "extra": "100 samples\n149 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.737248,
            "range": "± 0.003566",
            "unit": "us",
            "extra": "100 samples\n42 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.151794,
            "range": "± 0.002244",
            "unit": "us",
            "extra": "100 samples\n202 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.489022,
            "range": "± 0.007579",
            "unit": "us",
            "extra": "100 samples\n62 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 110.40845,
            "range": "± 1.215712",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 549.80812,
            "range": "± 4.109298",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 84.89513,
            "range": "± 1.523027",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 451.47985,
            "range": "± 8.442447",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "7c99475c26e09185417e916ea8855610da3e26f7",
          "message": "Minetest: fa682270a99383f0f91c37aeed974acc140f34df | Irrlicht: 128cf1696c2803e12ebbdd3ee034e0c9eea90fae",
          "timestamp": "2022-05-22T21:19:08Z",
          "url": "https://github.com/minetest/benchmarks/commit/7c99475c26e09185417e916ea8855610da3e26f7"
        },
        "date": 1653254879065,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.011219,
            "range": "± 0.001568",
            "unit": "us",
            "extra": "100 samples\n2472 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.058217,
            "range": "± 0.008011",
            "unit": "us",
            "extra": "100 samples\n503 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.053694,
            "range": "± 0.009296",
            "unit": "us",
            "extra": "100 samples\n605 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.167218,
            "range": "± 0.028131",
            "unit": "us",
            "extra": "100 samples\n188 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.071993,
            "range": "± 1.128128",
            "unit": "us",
            "extra": "100 samples\n6 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.50405,
            "range": "± 0.083728",
            "unit": "us",
            "extra": "100 samples\n59 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 36.68094,
            "range": "± 1.742600",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 103.46283,
            "range": "± 11.341720",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.117229,
            "range": "± 0.024193",
            "unit": "us",
            "extra": "100 samples\n258 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.323237,
            "range": "± 0.043651",
            "unit": "us",
            "extra": "100 samples\n97 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.10723,
            "range": "± 0.013522",
            "unit": "us",
            "extra": "100 samples\n274 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.264472,
            "range": "± 0.069748",
            "unit": "us",
            "extra": "100 samples\n108 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.6879,
            "range": "± 5.236308",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 213.13477,
            "range": "± 15.215170",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 63.55892,
            "range": "± 9.243401",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 203.07771,
            "range": "± 18.831292",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.207119,
            "range": "± 0.038197",
            "unit": "us",
            "extra": "100 samples\n143 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.805589,
            "range": "± 0.028792",
            "unit": "us",
            "extra": "100 samples\n39 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.162995,
            "range": "± 0.061900",
            "unit": "us",
            "extra": "100 samples\n192 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.500796,
            "range": "± 0.056626",
            "unit": "us",
            "extra": "100 samples\n54 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 114.68785,
            "range": "± 10.751274",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 633.03212,
            "range": "± 17.712599",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 92.85085,
            "range": "± 8.097185",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 558.17222,
            "range": "± 69.955005",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "6e2c8b4caf25a9d6366136fea2b25eefa7dd26aa",
          "message": "Minetest: 16a30556dfa8e27c82d026bd63467f82d2e37a1c | Irrlicht: 128cf1696c2803e12ebbdd3ee034e0c9eea90fae",
          "timestamp": "2022-05-23T21:20:02Z",
          "url": "https://github.com/minetest/benchmarks/commit/6e2c8b4caf25a9d6366136fea2b25eefa7dd26aa"
        },
        "date": 1653341320495,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.016488,
            "range": "± 0.000365",
            "unit": "us",
            "extra": "100 samples\n2149 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.068123,
            "range": "± 0.003395",
            "unit": "us",
            "extra": "100 samples\n551 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.048397,
            "range": "± 0.003319",
            "unit": "us",
            "extra": "100 samples\n733 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.188392,
            "range": "± 0.015533",
            "unit": "us",
            "extra": "100 samples\n194 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 8.047012,
            "range": "± 0.437272",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.485973,
            "range": "± 0.012800",
            "unit": "us",
            "extra": "100 samples\n75 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 36.15994,
            "range": "± 1.111861",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 108.62983,
            "range": "± 2.958172",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.142716,
            "range": "± 0.006390",
            "unit": "us",
            "extra": "100 samples\n247 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.328107,
            "range": "± 0.008721",
            "unit": "us",
            "extra": "100 samples\n112 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.112755,
            "range": "± 0.022288",
            "unit": "us",
            "extra": "100 samples\n266 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.261362,
            "range": "± 0.021994",
            "unit": "us",
            "extra": "100 samples\n124 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 87.59729,
            "range": "± 4.106224",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 223.04879,
            "range": "± 13.097073",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 71.71981,
            "range": "± 10.647437",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 207.55415,
            "range": "± 19.199907",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.232439,
            "range": "± 0.027825",
            "unit": "us",
            "extra": "100 samples\n150 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.846411,
            "range": "± 0.089971",
            "unit": "us",
            "extra": "100 samples\n41 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.175521,
            "range": "± 0.016014",
            "unit": "us",
            "extra": "100 samples\n207 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.583061,
            "range": "± 0.031792",
            "unit": "us",
            "extra": "100 samples\n64 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 138.27362,
            "range": "± 6.748690",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 634.69072,
            "range": "± 19.650559",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 103.52274,
            "range": "± 3.717336",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 530.81296,
            "range": "± 15.657868",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "3f9fc584cc3a98c64fbc76ddc700609f56a08599",
          "message": "Minetest: ed26ed5a1f49fc66facd4a745d29441aba5a92c3 | Irrlicht: 128cf1696c2803e12ebbdd3ee034e0c9eea90fae",
          "timestamp": "2022-05-24T01:57:33Z",
          "url": "https://github.com/minetest/benchmarks/commit/3f9fc584cc3a98c64fbc76ddc700609f56a08599"
        },
        "date": 1653358041446,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013611,
            "range": "± 0.004635",
            "unit": "us",
            "extra": "100 samples\n2640 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.066551,
            "range": "± 0.010891",
            "unit": "us",
            "extra": "100 samples\n539 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.051247,
            "range": "± 0.002171",
            "unit": "us",
            "extra": "100 samples\n673 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.182063,
            "range": "± 0.017524",
            "unit": "us",
            "extra": "100 samples\n179 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.310747,
            "range": "± 0.955799",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.590739,
            "range": "± 0.089628",
            "unit": "us",
            "extra": "100 samples\n50 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 47.22293,
            "range": "± 15.273604",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 113.32657,
            "range": "± 32.957343",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.125314,
            "range": "± 0.013471",
            "unit": "us",
            "extra": "100 samples\n262 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.44664,
            "range": "± 0.954823",
            "unit": "us",
            "extra": "100 samples\n102 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.127062,
            "range": "± 0.024098",
            "unit": "us",
            "extra": "100 samples\n279 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.283974,
            "range": "± 0.053925",
            "unit": "us",
            "extra": "100 samples\n107 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 78.65753,
            "range": "± 19.020472",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 261.70972,
            "range": "± 72.605492",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 67.74945,
            "range": "± 12.900650",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 208.38247,
            "range": "± 37.254810",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.228046,
            "range": "± 0.039982",
            "unit": "us",
            "extra": "100 samples\n136 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.899732,
            "range": "± 0.327781",
            "unit": "us",
            "extra": "100 samples\n40 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.160722,
            "range": "± 0.032679",
            "unit": "us",
            "extra": "100 samples\n197 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.582337,
            "range": "± 0.176499",
            "unit": "us",
            "extra": "100 samples\n57 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 126.7688,
            "range": "± 51.810867",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 669.37056,
            "range": "± 98.958456",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 88.43149,
            "range": "± 15.775107",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 530.23891,
            "range": "± 45.887942",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "448dcd06fcb19fe2abaf978a1b50393d6c103c49",
          "message": "Minetest: 8b74257bf3cbb54e78614ac6aaaba79adf75cc8e | Irrlicht: 128cf1696c2803e12ebbdd3ee034e0c9eea90fae",
          "timestamp": "2022-05-26T15:26:19Z",
          "url": "https://github.com/minetest/benchmarks/commit/448dcd06fcb19fe2abaf978a1b50393d6c103c49"
        },
        "date": 1653579341169,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.011146,
            "range": "± 0.001424",
            "unit": "us",
            "extra": "100 samples\n2776 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.061598,
            "range": "± 0.019155",
            "unit": "us",
            "extra": "100 samples\n533 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.054612,
            "range": "± 0.033771",
            "unit": "us",
            "extra": "100 samples\n654 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.162129,
            "range": "± 0.059316",
            "unit": "us",
            "extra": "100 samples\n194 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 4.970373,
            "range": "± 1.561148",
            "unit": "us",
            "extra": "100 samples\n8 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.566633,
            "range": "± 0.153718",
            "unit": "us",
            "extra": "100 samples\n60 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 64.64296,
            "range": "± 120.257075",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 100.22797,
            "range": "± 15.469136",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.123753,
            "range": "± 0.038374",
            "unit": "us",
            "extra": "100 samples\n271 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.276918,
            "range": "± 0.041791",
            "unit": "us",
            "extra": "100 samples\n110 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.119111,
            "range": "± 0.017240",
            "unit": "us",
            "extra": "100 samples\n305 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.241746,
            "range": "± 0.003402",
            "unit": "us",
            "extra": "100 samples\n127 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 72.28348,
            "range": "± 11.681100",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 202.57787,
            "range": "± 37.647882",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 64.28396,
            "range": "± 13.758454",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 208.5769,
            "range": "± 129.707009",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.207213,
            "range": "± 0.045147",
            "unit": "us",
            "extra": "100 samples\n150 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.871139,
            "range": "± 0.463745",
            "unit": "us",
            "extra": "100 samples\n43 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.146651,
            "range": "± 0.031772",
            "unit": "us",
            "extra": "100 samples\n189 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.477,
            "range": "± 0.048637",
            "unit": "us",
            "extra": "100 samples\n64 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 103.97595,
            "range": "± 16.043712",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 606.58056,
            "range": "± 81.857765",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 96.21793,
            "range": "± 10.292073",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 470.09466,
            "range": "± 54.889524",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "a200278889e7b95e71053139758d00ccd90ed83d",
          "message": "Minetest: ef22c0206f225dbccd67bff9fb888867c63039b3 | Irrlicht: 128cf1696c2803e12ebbdd3ee034e0c9eea90fae",
          "timestamp": "2022-05-26T21:20:36Z",
          "url": "https://github.com/minetest/benchmarks/commit/a200278889e7b95e71053139758d00ccd90ed83d"
        },
        "date": 1653600472041,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.011918,
            "range": "± 0.000433",
            "unit": "us",
            "extra": "100 samples\n2613 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.051661,
            "range": "± 0.001945",
            "unit": "us",
            "extra": "100 samples\n520 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.041626,
            "range": "± 0.005589",
            "unit": "us",
            "extra": "100 samples\n686 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.145546,
            "range": "± 0.008467",
            "unit": "us",
            "extra": "100 samples\n210 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.189615,
            "range": "± 0.086468",
            "unit": "us",
            "extra": "100 samples\n6 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.398716,
            "range": "± 0.044185",
            "unit": "us",
            "extra": "100 samples\n75 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 28.781725,
            "range": "± 7.863158",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 89.10218,
            "range": "± 1.386382",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.11963,
            "range": "± 0.002421",
            "unit": "us",
            "extra": "100 samples\n247 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.272062,
            "range": "± 0.005855",
            "unit": "us",
            "extra": "100 samples\n108 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.107786,
            "range": "± 0.004828",
            "unit": "us",
            "extra": "100 samples\n272 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.252878,
            "range": "± 0.005791",
            "unit": "us",
            "extra": "100 samples\n117 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.23829,
            "range": "± 1.000058",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 183.41122,
            "range": "± 1.853134",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 67.34835,
            "range": "± 1.081958",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 170.99734,
            "range": "± 2.646820",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.188622,
            "range": "± 0.002239",
            "unit": "us",
            "extra": "100 samples\n154 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.69511,
            "range": "± 0.010541",
            "unit": "us",
            "extra": "100 samples\n43 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.143861,
            "range": "± 0.005441",
            "unit": "us",
            "extra": "100 samples\n204 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.462726,
            "range": "± 0.010831",
            "unit": "us",
            "extra": "100 samples\n63 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 104.028,
            "range": "± 2.954859",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 530.82785,
            "range": "± 16.828313",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 79.89625,
            "range": "± 3.537075",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 381.87729,
            "range": "± 5.628784",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "d93c222a66981171e22a628bb9e0ce88a46dfa55",
          "message": "Minetest: e8b2954586ebd9e35e3f9f7230ff6713b65c4967 | Irrlicht: 128cf1696c2803e12ebbdd3ee034e0c9eea90fae",
          "timestamp": "2022-05-27T21:20:35Z",
          "url": "https://github.com/minetest/benchmarks/commit/d93c222a66981171e22a628bb9e0ce88a46dfa55"
        },
        "date": 1653686902387,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013101,
            "range": "± 0.000252",
            "unit": "us",
            "extra": "100 samples\n2260 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.053521,
            "range": "± 0.001384",
            "unit": "us",
            "extra": "100 samples\n553 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.040965,
            "range": "± 0.000281",
            "unit": "us",
            "extra": "100 samples\n717 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.156743,
            "range": "± 0.002908",
            "unit": "us",
            "extra": "100 samples\n190 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.930052,
            "range": "± 0.121126",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.409893,
            "range": "± 0.025018",
            "unit": "us",
            "extra": "100 samples\n73 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 30.09625,
            "range": "± 0.974643",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 93.579,
            "range": "± 0.835509",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.121699,
            "range": "± 0.003274",
            "unit": "us",
            "extra": "100 samples\n245 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.279526,
            "range": "± 0.005746",
            "unit": "us",
            "extra": "100 samples\n107 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.113178,
            "range": "± 0.004489",
            "unit": "us",
            "extra": "100 samples\n265 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.251502,
            "range": "± 0.007534",
            "unit": "us",
            "extra": "100 samples\n118 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.3476,
            "range": "± 0.886496",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 194.48555,
            "range": "± 1.733932",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 68.49158,
            "range": "± 0.869692",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 184.88053,
            "range": "± 2.509007",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.209192,
            "range": "± 0.004157",
            "unit": "us",
            "extra": "100 samples\n144 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.750865,
            "range": "± 0.017060",
            "unit": "us",
            "extra": "100 samples\n40 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.151169,
            "range": "± 0.001711",
            "unit": "us",
            "extra": "100 samples\n197 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.496771,
            "range": "± 0.011158",
            "unit": "us",
            "extra": "100 samples\n60 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 117.80796,
            "range": "± 1.179516",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 550.8565,
            "range": "± 2.253724",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 88.0247,
            "range": "± 0.719259",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 450.58055,
            "range": "± 3.561668",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "1e21e53cacc989c9a59da4ab4e3956b9d0a1b696",
          "message": "Minetest: 76000e676bde0191d64dc0afd2f3ae74bb6c40b5 | Irrlicht: 128cf1696c2803e12ebbdd3ee034e0c9eea90fae",
          "timestamp": "2022-05-28T12:36:33Z",
          "url": "https://github.com/minetest/benchmarks/commit/1e21e53cacc989c9a59da4ab4e3956b9d0a1b696"
        },
        "date": 1653741842216,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013068,
            "range": "± 0.000205",
            "unit": "us",
            "extra": "100 samples\n2249 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.05351,
            "range": "± 0.001012",
            "unit": "us",
            "extra": "100 samples\n404 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.041124,
            "range": "± 0.001888",
            "unit": "us",
            "extra": "100 samples\n717 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.157085,
            "range": "± 0.002810",
            "unit": "us",
            "extra": "100 samples\n190 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.935644,
            "range": "± 0.085850",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.40807,
            "range": "± 0.019862",
            "unit": "us",
            "extra": "100 samples\n74 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 30.0512,
            "range": "± 0.420208",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 93.5066,
            "range": "± 0.641845",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.121775,
            "range": "± 0.000643",
            "unit": "us",
            "extra": "100 samples\n244 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.28074,
            "range": "± 0.009009",
            "unit": "us",
            "extra": "100 samples\n107 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.111604,
            "range": "± 0.000872",
            "unit": "us",
            "extra": "100 samples\n265 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.251035,
            "range": "± 0.004618",
            "unit": "us",
            "extra": "100 samples\n119 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.38448,
            "range": "± 0.476278",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 194.58124,
            "range": "± 1.119386",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 68.67643,
            "range": "± 0.602738",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 183.32716,
            "range": "± 0.963544",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.210015,
            "range": "± 0.003553",
            "unit": "us",
            "extra": "100 samples\n144 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.774952,
            "range": "± 0.013327",
            "unit": "us",
            "extra": "100 samples\n38 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.150087,
            "range": "± 0.000981",
            "unit": "us",
            "extra": "100 samples\n197 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.494823,
            "range": "± 0.007682",
            "unit": "us",
            "extra": "100 samples\n61 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 118.40671,
            "range": "± 1.444257",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 550.38254,
            "range": "± 1.760002",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 88.59758,
            "range": "± 0.625855",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 450.32388,
            "range": "± 1.674805",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "842c16965d64e8126359bdbc005c1d575158e5f1",
          "message": "Minetest: a9a207685a9d55e4fcdd97f5065383e2ec18e114 | Irrlicht: 128cf1696c2803e12ebbdd3ee034e0c9eea90fae",
          "timestamp": "2022-05-29T12:37:22Z",
          "url": "https://github.com/minetest/benchmarks/commit/842c16965d64e8126359bdbc005c1d575158e5f1"
        },
        "date": 1653828353855,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013436,
            "range": "± 0.000235",
            "unit": "us",
            "extra": "100 samples\n2351 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.053396,
            "range": "± 0.002119",
            "unit": "us",
            "extra": "100 samples\n597 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.044564,
            "range": "± 0.000845",
            "unit": "us",
            "extra": "100 samples\n706 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.161828,
            "range": "± 0.004595",
            "unit": "us",
            "extra": "100 samples\n196 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.906052,
            "range": "± 0.122292",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.409977,
            "range": "± 0.027676",
            "unit": "us",
            "extra": "100 samples\n78 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 29.713215,
            "range": "± 0.391782",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 95.26264,
            "range": "± 0.916447",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.119584,
            "range": "± 0.001123",
            "unit": "us",
            "extra": "100 samples\n264 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.272985,
            "range": "± 0.007177",
            "unit": "us",
            "extra": "100 samples\n117 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.112869,
            "range": "± 0.001174",
            "unit": "us",
            "extra": "100 samples\n280 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.245746,
            "range": "± 0.005238",
            "unit": "us",
            "extra": "100 samples\n129 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.71564,
            "range": "± 1.831609",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 194.54164,
            "range": "± 1.945257",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 68.82861,
            "range": "± 1.166598",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 183.40841,
            "range": "± 1.961479",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.209975,
            "range": "± 0.004821",
            "unit": "us",
            "extra": "100 samples\n152 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.747564,
            "range": "± 0.005445",
            "unit": "us",
            "extra": "100 samples\n43 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.149285,
            "range": "± 0.002581",
            "unit": "us",
            "extra": "100 samples\n211 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.49377,
            "range": "± 0.002770",
            "unit": "us",
            "extra": "100 samples\n64 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 108.24084,
            "range": "± 3.419714",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 549.80718,
            "range": "± 3.921288",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 83.03564,
            "range": "± 2.149922",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 448.26139,
            "range": "± 2.809621",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "cca487c6753e457b408df886d1b960f9f8e206cb",
          "message": "Minetest: 9fc018ded10225589d2559d24a5db739e891fb31 | Irrlicht: 128cf1696c2803e12ebbdd3ee034e0c9eea90fae",
          "timestamp": "2022-05-29T15:22:32Z",
          "url": "https://github.com/minetest/benchmarks/commit/cca487c6753e457b408df886d1b960f9f8e206cb"
        },
        "date": 1653838199846,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013713,
            "range": "± 0.000074",
            "unit": "us",
            "extra": "100 samples\n2148 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.053496,
            "range": "± 0.000905",
            "unit": "us",
            "extra": "100 samples\n531 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.041621,
            "range": "± 0.000666",
            "unit": "us",
            "extra": "100 samples\n724 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.151896,
            "range": "± 0.001127",
            "unit": "us",
            "extra": "100 samples\n197 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.917902,
            "range": "± 0.101448",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.409358,
            "range": "± 0.015348",
            "unit": "us",
            "extra": "100 samples\n74 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 30.08045,
            "range": "± 0.415806",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 89.47535,
            "range": "± 1.072481",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.121266,
            "range": "± 0.003663",
            "unit": "us",
            "extra": "100 samples\n246 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.272689,
            "range": "± 0.004793",
            "unit": "us",
            "extra": "100 samples\n111 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.113161,
            "range": "± 0.002148",
            "unit": "us",
            "extra": "100 samples\n258 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.241212,
            "range": "± 0.003816",
            "unit": "us",
            "extra": "100 samples\n125 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.91413,
            "range": "± 1.220625",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 193.28095,
            "range": "± 1.104861",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 69.10205,
            "range": "± 0.746541",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 183.23983,
            "range": "± 1.826422",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.210584,
            "range": "± 0.010536",
            "unit": "us",
            "extra": "100 samples\n143 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.728511,
            "range": "± 0.015984",
            "unit": "us",
            "extra": "100 samples\n42 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.150012,
            "range": "± 0.004135",
            "unit": "us",
            "extra": "100 samples\n200 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.481134,
            "range": "± 0.007629",
            "unit": "us",
            "extra": "100 samples\n63 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 113.99676,
            "range": "± 1.120458",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 531.8951,
            "range": "± 3.778564",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 86.0423,
            "range": "± 0.513382",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 443.03472,
            "range": "± 2.757374",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "9894700c11b08dfe63e2ce79c31e1f32ed9bd15f",
          "message": "Minetest: 9fc018ded10225589d2559d24a5db739e891fb31 | Irrlicht: aa095d9525bce099a500b40b9b0e2736227485d7",
          "timestamp": "2022-06-01T15:26:05Z",
          "url": "https://github.com/minetest/benchmarks/commit/9894700c11b08dfe63e2ce79c31e1f32ed9bd15f"
        },
        "date": 1654097647381,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.011292,
            "range": "± 0.000305",
            "unit": "us",
            "extra": "100 samples\n2679 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.052245,
            "range": "± 0.004256",
            "unit": "us",
            "extra": "100 samples\n603 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.044144,
            "range": "± 0.006849",
            "unit": "us",
            "extra": "100 samples\n628 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.141286,
            "range": "± 0.002578",
            "unit": "us",
            "extra": "100 samples\n212 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.097058,
            "range": "± 0.304888",
            "unit": "us",
            "extra": "100 samples\n6 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.400004,
            "range": "± 0.045920",
            "unit": "us",
            "extra": "100 samples\n77 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 28.11641,
            "range": "± 2.992800",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 89.73004,
            "range": "± 2.199674",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.118759,
            "range": "± 0.002268",
            "unit": "us",
            "extra": "100 samples\n255 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.267285,
            "range": "± 0.007376",
            "unit": "us",
            "extra": "100 samples\n111 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.106532,
            "range": "± 0.000760",
            "unit": "us",
            "extra": "100 samples\n283 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.250636,
            "range": "± 0.007764",
            "unit": "us",
            "extra": "100 samples\n119 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.49207,
            "range": "± 0.837367",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 179.14532,
            "range": "± 2.946969",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 67.73061,
            "range": "± 0.837871",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 173.3624,
            "range": "± 2.336005",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.206511,
            "range": "± 0.014437",
            "unit": "us",
            "extra": "100 samples\n132 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.69013,
            "range": "± 0.021649",
            "unit": "us",
            "extra": "100 samples\n44 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.144777,
            "range": "± 0.006118",
            "unit": "us",
            "extra": "100 samples\n203 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.463814,
            "range": "± 0.008743",
            "unit": "us",
            "extra": "100 samples\n66 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 103.05401,
            "range": "± 3.864018",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 532.35378,
            "range": "± 39.798999",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 88.17039,
            "range": "± 3.343787",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 383.18768,
            "range": "± 9.822418",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "012ba8a343a74183f98bea5becef3caa95630278",
          "message": "Minetest: 9fc018ded10225589d2559d24a5db739e891fb31 | Irrlicht: 426730bf9196f92bcb5f317abb8d082e3a6bbba3",
          "timestamp": "2022-06-02T02:00:50Z",
          "url": "https://github.com/minetest/benchmarks/commit/012ba8a343a74183f98bea5becef3caa95630278"
        },
        "date": 1654135750442,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.012836,
            "range": "± 0.007527",
            "unit": "us",
            "extra": "100 samples\n2541 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.049578,
            "range": "± 0.014980",
            "unit": "us",
            "extra": "100 samples\n536 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.048489,
            "range": "± 0.020026",
            "unit": "us",
            "extra": "100 samples\n703 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.127268,
            "range": "± 0.001030",
            "unit": "us",
            "extra": "100 samples\n187 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 7.683882,
            "range": "± 31.870497",
            "unit": "us",
            "extra": "100 samples\n8 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.484809,
            "range": "± 0.061585",
            "unit": "us",
            "extra": "100 samples\n53 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 37.51589,
            "range": "± 6.766946",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 87.47674,
            "range": "± 19.789695",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.103723,
            "range": "± 0.025666",
            "unit": "us",
            "extra": "100 samples\n286 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.231403,
            "range": "± 0.003236",
            "unit": "us",
            "extra": "100 samples\n109 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.099633,
            "range": "± 0.032325",
            "unit": "us",
            "extra": "100 samples\n292 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.284703,
            "range": "± 0.117107",
            "unit": "us",
            "extra": "100 samples\n125 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.17511,
            "range": "± 23.645607",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 177.3703,
            "range": "± 31.714356",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 63.15108,
            "range": "± 31.235530",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 170.44327,
            "range": "± 30.402923",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.230831,
            "range": "± 0.155901",
            "unit": "us",
            "extra": "100 samples\n130 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.757413,
            "range": "± 0.222641",
            "unit": "us",
            "extra": "100 samples\n34 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.121819,
            "range": "± 0.021004",
            "unit": "us",
            "extra": "100 samples\n199 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.475191,
            "range": "± 0.224080",
            "unit": "us",
            "extra": "100 samples\n58 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 86.35198,
            "range": "± 12.460748",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 515.04187,
            "range": "± 70.948014",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 73.98599,
            "range": "± 16.515138",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 407.35291,
            "range": "± 61.901305",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "cd9ed4a983f815a86fdf934adb49ee806ddb7e45",
          "message": "Minetest: 575caa8015fe420ce5e709d6c137036dfc0262ef | Irrlicht: 426730bf9196f92bcb5f317abb8d082e3a6bbba3",
          "timestamp": "2022-06-03T21:17:25Z",
          "url": "https://github.com/minetest/benchmarks/commit/cd9ed4a983f815a86fdf934adb49ee806ddb7e45"
        },
        "date": 1654291479477,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013721,
            "range": "± 0.000173",
            "unit": "us",
            "extra": "100 samples\n2177 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.054796,
            "range": "± 0.001353",
            "unit": "us",
            "extra": "100 samples\n551 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.040931,
            "range": "± 0.000568",
            "unit": "us",
            "extra": "100 samples\n731 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.159521,
            "range": "± 0.003475",
            "unit": "us",
            "extra": "100 samples\n191 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.921528,
            "range": "± 0.087513",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.408372,
            "range": "± 0.016555",
            "unit": "us",
            "extra": "100 samples\n74 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 30.09756,
            "range": "± 0.564164",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 93.65269,
            "range": "± 1.161473",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.121531,
            "range": "± 0.002140",
            "unit": "us",
            "extra": "100 samples\n246 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.284615,
            "range": "± 0.004641",
            "unit": "us",
            "extra": "100 samples\n105 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.112017,
            "range": "± 0.001790",
            "unit": "us",
            "extra": "100 samples\n272 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.257099,
            "range": "± 0.006612",
            "unit": "us",
            "extra": "100 samples\n117 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.30529,
            "range": "± 0.663070",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 194.56861,
            "range": "± 1.120546",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 68.62528,
            "range": "± 0.703155",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 183.13842,
            "range": "± 1.974570",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.207976,
            "range": "± 0.001344",
            "unit": "us",
            "extra": "100 samples\n144 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.755339,
            "range": "± 0.010537",
            "unit": "us",
            "extra": "100 samples\n40 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.151003,
            "range": "± 0.002663",
            "unit": "us",
            "extra": "100 samples\n199 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.496779,
            "range": "± 0.009274",
            "unit": "us",
            "extra": "100 samples\n61 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 117.9442,
            "range": "± 1.162948",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 551.56423,
            "range": "± 4.547529",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 88.49467,
            "range": "± 0.731192",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 448.7423,
            "range": "± 1.796274",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "1074bfaf66c7975749fbb75579fc6012edf3d8bf",
          "message": "Minetest: 8e5bd82c4d19c405fbb4f2592bf91ad8b110294b | Irrlicht: 426730bf9196f92bcb5f317abb8d082e3a6bbba3",
          "timestamp": "2022-06-04T01:45:46Z",
          "url": "https://github.com/minetest/benchmarks/commit/1074bfaf66c7975749fbb75579fc6012edf3d8bf"
        },
        "date": 1654307707328,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.01251,
            "range": "± 0.002420",
            "unit": "us",
            "extra": "100 samples\n2602 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.060571,
            "range": "± 0.004998",
            "unit": "us",
            "extra": "100 samples\n487 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.054484,
            "range": "± 0.015532",
            "unit": "us",
            "extra": "100 samples\n628 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.179011,
            "range": "± 0.035135",
            "unit": "us",
            "extra": "100 samples\n174 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 4.868713,
            "range": "± 0.160567",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.591785,
            "range": "± 0.132918",
            "unit": "us",
            "extra": "100 samples\n51 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 44.23906,
            "range": "± 8.331510",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 111.57773,
            "range": "± 40.928277",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.117451,
            "range": "± 0.009038",
            "unit": "us",
            "extra": "100 samples\n255 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.356377,
            "range": "± 0.325632",
            "unit": "us",
            "extra": "100 samples\n98 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.11266,
            "range": "± 0.012314",
            "unit": "us",
            "extra": "100 samples\n276 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.285455,
            "range": "± 0.040223",
            "unit": "us",
            "extra": "100 samples\n110 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 71.4771,
            "range": "± 8.137355",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 227.80428,
            "range": "± 38.399294",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 70.25308,
            "range": "± 33.947981",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 213.48519,
            "range": "± 34.716430",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.255919,
            "range": "± 0.274723",
            "unit": "us",
            "extra": "100 samples\n136 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.840244,
            "range": "± 0.029659",
            "unit": "us",
            "extra": "100 samples\n37 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.159538,
            "range": "± 0.010033",
            "unit": "us",
            "extra": "100 samples\n184 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.594091,
            "range": "± 0.383008",
            "unit": "us",
            "extra": "100 samples\n55 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 116.58909,
            "range": "± 9.006871",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 661.1397,
            "range": "± 113.262070",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 92.46611,
            "range": "± 5.505384",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 518.59552,
            "range": "± 39.958557",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "16e5d009df2b22a1ae37e2270045953118b7f3a2",
          "message": "Minetest: 21323ef1ff02dd714330a8c9d8235f047e1dacf8 | Irrlicht: 426730bf9196f92bcb5f317abb8d082e3a6bbba3",
          "timestamp": "2022-06-05T15:19:59Z",
          "url": "https://github.com/minetest/benchmarks/commit/16e5d009df2b22a1ae37e2270045953118b7f3a2"
        },
        "date": 1654442982300,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.012527,
            "range": "± 0.001421",
            "unit": "us",
            "extra": "100 samples\n2622 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.068988,
            "range": "± 0.024886",
            "unit": "us",
            "extra": "100 samples\n505 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.053916,
            "range": "± 0.003464",
            "unit": "us",
            "extra": "100 samples\n657 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.234955,
            "range": "± 0.067600",
            "unit": "us",
            "extra": "100 samples\n140 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 4.944111,
            "range": "± 0.829912",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.685504,
            "range": "± 0.253371",
            "unit": "us",
            "extra": "100 samples\n57 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 42.43174,
            "range": "± 10.499636",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 109.05339,
            "range": "± 9.067943",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.136165,
            "range": "± 0.037120",
            "unit": "us",
            "extra": "100 samples\n265 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.356187,
            "range": "± 0.105247",
            "unit": "us",
            "extra": "100 samples\n100 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.131708,
            "range": "± 0.105782",
            "unit": "us",
            "extra": "100 samples\n278 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.314882,
            "range": "± 0.061192",
            "unit": "us",
            "extra": "100 samples\n112 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 81.42844,
            "range": "± 19.123887",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 274.95511,
            "range": "± 123.585922",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 68.12751,
            "range": "± 13.854512",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 226.29535,
            "range": "± 50.652147",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.230046,
            "range": "± 0.031261",
            "unit": "us",
            "extra": "100 samples\n146 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.90502,
            "range": "± 0.233219",
            "unit": "us",
            "extra": "100 samples\n38 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.163772,
            "range": "± 0.018226",
            "unit": "us",
            "extra": "100 samples\n207 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.593946,
            "range": "± 0.108982",
            "unit": "us",
            "extra": "100 samples\n60 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 124.64405,
            "range": "± 46.284713",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 680.9162,
            "range": "± 50.867223",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 93.64038,
            "range": "± 15.025608",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 523.1693,
            "range": "± 20.830677",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "401e2474e64c41c0f2432acd3fc6a1101c734372",
          "message": "Minetest: 14c283a623a1c9c0015f04865655df7a225bedf9 | Irrlicht: 426730bf9196f92bcb5f317abb8d082e3a6bbba3",
          "timestamp": "2022-06-05T18:24:07Z",
          "url": "https://github.com/minetest/benchmarks/commit/401e2474e64c41c0f2432acd3fc6a1101c734372"
        },
        "date": 1654453997013,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.012369,
            "range": "± 0.003120",
            "unit": "us",
            "extra": "100 samples\n2562 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.055696,
            "range": "± 0.015020",
            "unit": "us",
            "extra": "100 samples\n537 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.047755,
            "range": "± 0.008358",
            "unit": "us",
            "extra": "100 samples\n599 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.169921,
            "range": "± 0.092170",
            "unit": "us",
            "extra": "100 samples\n177 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 4.526574,
            "range": "± 1.429004",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.593312,
            "range": "± 0.158246",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 40.59303,
            "range": "± 10.827033",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 107.60306,
            "range": "± 19.807320",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.117004,
            "range": "± 0.014467",
            "unit": "us",
            "extra": "100 samples\n244 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.302309,
            "range": "± 0.072111",
            "unit": "us",
            "extra": "100 samples\n94 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.09639,
            "range": "± 0.019167",
            "unit": "us",
            "extra": "100 samples\n249 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.262074,
            "range": "± 0.056553",
            "unit": "us",
            "extra": "100 samples\n108 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 71.57003,
            "range": "± 11.041179",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 208.79506,
            "range": "± 37.839348",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 61.94402,
            "range": "± 13.680243",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 190.15606,
            "range": "± 38.492139",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.209468,
            "range": "± 0.068802",
            "unit": "us",
            "extra": "100 samples\n139 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.785003,
            "range": "± 0.197441",
            "unit": "us",
            "extra": "100 samples\n38 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.145699,
            "range": "± 0.048799",
            "unit": "us",
            "extra": "100 samples\n199 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.534916,
            "range": "± 0.178037",
            "unit": "us",
            "extra": "100 samples\n58 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 110.84236,
            "range": "± 20.634495",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 598.14195,
            "range": "± 93.529366",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 82.99225,
            "range": "± 20.906172",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 482.02129,
            "range": "± 72.727705",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "ca5db6b1ac7badd704bae2ae95947bbc5a4ba9a0",
          "message": "Minetest: 381f84ee2788eb462999701e902bd22271cfcb2e | Irrlicht: 426730bf9196f92bcb5f317abb8d082e3a6bbba3",
          "timestamp": "2022-06-05T21:17:53Z",
          "url": "https://github.com/minetest/benchmarks/commit/ca5db6b1ac7badd704bae2ae95947bbc5a4ba9a0"
        },
        "date": 1654464402982,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.011032,
            "range": "± 0.000520",
            "unit": "us",
            "extra": "100 samples\n2378 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.059235,
            "range": "± 0.007751",
            "unit": "us",
            "extra": "100 samples\n499 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.051294,
            "range": "± 0.007355",
            "unit": "us",
            "extra": "100 samples\n586 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.181309,
            "range": "± 0.027695",
            "unit": "us",
            "extra": "100 samples\n175 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 4.522023,
            "range": "± 0.533787",
            "unit": "us",
            "extra": "100 samples\n6 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.532942,
            "range": "± 0.048153",
            "unit": "us",
            "extra": "100 samples\n50 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 40.48819,
            "range": "± 20.174111",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 105.53445,
            "range": "± 22.629124",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.146944,
            "range": "± 0.117972",
            "unit": "us",
            "extra": "100 samples\n231 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.27156,
            "range": "± 0.003764",
            "unit": "us",
            "extra": "100 samples\n102 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.107094,
            "range": "± 0.012192",
            "unit": "us",
            "extra": "100 samples\n266 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.24508,
            "range": "± 0.009098",
            "unit": "us",
            "extra": "100 samples\n114 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 70.97828,
            "range": "± 7.224140",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 228.24391,
            "range": "± 162.087300",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 60.49326,
            "range": "± 6.061608",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 191.25484,
            "range": "± 22.120855",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.192839,
            "range": "± 0.004381",
            "unit": "us",
            "extra": "100 samples\n136 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.736111,
            "range": "± 0.058561",
            "unit": "us",
            "extra": "100 samples\n37 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.14696,
            "range": "± 0.039273",
            "unit": "us",
            "extra": "100 samples\n174 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.493687,
            "range": "± 0.047182",
            "unit": "us",
            "extra": "100 samples\n54 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 106.22943,
            "range": "± 11.001217",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 642.85752,
            "range": "± 403.517084",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 80.19227,
            "range": "± 3.994315",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 481.83591,
            "range": "± 53.448833",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "5d060124c9a2487f81a4864d2b82d523d1331868",
          "message": "Minetest: 951604e29ff9d4b796003264574e06031c014a3f | Irrlicht: 392df9bae3de8a71bf1d119a58dc2d9f1388751d",
          "timestamp": "2022-06-06T12:43:45Z",
          "url": "https://github.com/minetest/benchmarks/commit/5d060124c9a2487f81a4864d2b82d523d1331868"
        },
        "date": 1654519881816,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.014071,
            "range": "± 0.000285",
            "unit": "us",
            "extra": "100 samples\n2134 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.05761,
            "range": "± 0.001391",
            "unit": "us",
            "extra": "100 samples\n548 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.043933,
            "range": "± 0.001027",
            "unit": "us",
            "extra": "100 samples\n680 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.162927,
            "range": "± 0.001440",
            "unit": "us",
            "extra": "100 samples\n185 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.912508,
            "range": "± 0.105916",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.408465,
            "range": "± 0.013687",
            "unit": "us",
            "extra": "100 samples\n74 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 29.72346,
            "range": "± 0.536049",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 95.18744,
            "range": "± 0.929745",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.121909,
            "range": "± 0.002852",
            "unit": "us",
            "extra": "100 samples\n247 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.273509,
            "range": "± 0.006713",
            "unit": "us",
            "extra": "100 samples\n111 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.112671,
            "range": "± 0.001961",
            "unit": "us",
            "extra": "100 samples\n269 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.248045,
            "range": "± 0.005167",
            "unit": "us",
            "extra": "100 samples\n122 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 74.23106,
            "range": "± 4.075333",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 194.15292,
            "range": "± 1.480889",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 69.26402,
            "range": "± 1.757137",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 182.84174,
            "range": "± 1.257694",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.208065,
            "range": "± 0.004311",
            "unit": "us",
            "extra": "100 samples\n146 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.745109,
            "range": "± 0.005012",
            "unit": "us",
            "extra": "100 samples\n41 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.15035,
            "range": "± 0.002759",
            "unit": "us",
            "extra": "100 samples\n201 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.493433,
            "range": "± 0.001261",
            "unit": "us",
            "extra": "100 samples\n61 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 106.94731,
            "range": "± 1.438241",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 549.45502,
            "range": "± 2.314071",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 83.64415,
            "range": "± 1.778594",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 447.44451,
            "range": "± 2.046419",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "baf233ce9f8ff97afb85ff41934f8ae1552fc204",
          "message": "Minetest: edc7df54801ab3bf30f96ac5aad6ce11a102f6b9 | Irrlicht: 392df9bae3de8a71bf1d119a58dc2d9f1388751d",
          "timestamp": "2022-06-06T18:25:19Z",
          "url": "https://github.com/minetest/benchmarks/commit/baf233ce9f8ff97afb85ff41934f8ae1552fc204"
        },
        "date": 1654540374019,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.014047,
            "range": "± 0.000068",
            "unit": "us",
            "extra": "100 samples\n2129 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.057648,
            "range": "± 0.001038",
            "unit": "us",
            "extra": "100 samples\n548 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.043973,
            "range": "± 0.000699",
            "unit": "us",
            "extra": "100 samples\n680 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.16285,
            "range": "± 0.001624",
            "unit": "us",
            "extra": "100 samples\n184 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.968888,
            "range": "± 0.726446",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.408592,
            "range": "± 0.015376",
            "unit": "us",
            "extra": "100 samples\n74 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 29.69525,
            "range": "± 0.345297",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 95.14579,
            "range": "± 0.756622",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.121454,
            "range": "± 0.002970",
            "unit": "us",
            "extra": "100 samples\n245 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.273239,
            "range": "± 0.004592",
            "unit": "us",
            "extra": "100 samples\n110 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.112562,
            "range": "± 0.001866",
            "unit": "us",
            "extra": "100 samples\n269 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.248002,
            "range": "± 0.004861",
            "unit": "us",
            "extra": "100 samples\n122 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 74.01139,
            "range": "± 1.461931",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 193.91204,
            "range": "± 1.057231",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 69.14537,
            "range": "± 1.283192",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 182.805,
            "range": "± 0.783925",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.208339,
            "range": "± 0.003618",
            "unit": "us",
            "extra": "100 samples\n145 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.749405,
            "range": "± 0.010656",
            "unit": "us",
            "extra": "100 samples\n40 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.149711,
            "range": "± 0.003084",
            "unit": "us",
            "extra": "100 samples\n200 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.513537,
            "range": "± 0.001957",
            "unit": "us",
            "extra": "100 samples\n60 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 108.2507,
            "range": "± 2.862299",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 549.0715,
            "range": "± 1.879257",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 83.07349,
            "range": "± 1.897931",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 447.54994,
            "range": "± 1.807862",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "30d017c124f41ef3f2f562230a2720da63c8dea3",
          "message": "Minetest: 213d3562bd29805e0bc8549a4e9e3aa2bf0f0349 | Irrlicht: 392df9bae3de8a71bf1d119a58dc2d9f1388751d",
          "timestamp": "2022-06-07T21:18:20Z",
          "url": "https://github.com/minetest/benchmarks/commit/30d017c124f41ef3f2f562230a2720da63c8dea3"
        },
        "date": 1654637129339,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.01404,
            "range": "± 0.000023",
            "unit": "us",
            "extra": "100 samples\n2134 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.057773,
            "range": "± 0.001265",
            "unit": "us",
            "extra": "100 samples\n545 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.044473,
            "range": "± 0.000195",
            "unit": "us",
            "extra": "100 samples\n665 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.162537,
            "range": "± 0.002601",
            "unit": "us",
            "extra": "100 samples\n185 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.909686,
            "range": "± 0.117309",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.411816,
            "range": "± 0.028363",
            "unit": "us",
            "extra": "100 samples\n74 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 29.69389,
            "range": "± 0.381192",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 95.31521,
            "range": "± 1.301599",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.120933,
            "range": "± 0.002989",
            "unit": "us",
            "extra": "100 samples\n247 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.276322,
            "range": "± 0.009047",
            "unit": "us",
            "extra": "100 samples\n110 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.11192,
            "range": "± 0.002438",
            "unit": "us",
            "extra": "100 samples\n271 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.259469,
            "range": "± 0.011781",
            "unit": "us",
            "extra": "100 samples\n114 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.49701,
            "range": "± 1.104208",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 194.33063,
            "range": "± 1.234214",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 69.07499,
            "range": "± 1.319816",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 183.1585,
            "range": "± 1.146991",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.201989,
            "range": "± 0.003135",
            "unit": "us",
            "extra": "100 samples\n149 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.746766,
            "range": "± 0.011354",
            "unit": "us",
            "extra": "100 samples\n41 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.148916,
            "range": "± 0.001271",
            "unit": "us",
            "extra": "100 samples\n202 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.492902,
            "range": "± 0.001481",
            "unit": "us",
            "extra": "100 samples\n61 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 111.22023,
            "range": "± 3.091987",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 549.36852,
            "range": "± 2.558502",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 83.55514,
            "range": "± 1.347130",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 449.62424,
            "range": "± 2.211875",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "402b4755cb73a5c9908b8e16b745128f51c6d79b",
          "message": "Minetest: 213d3562bd29805e0bc8549a4e9e3aa2bf0f0349 | Irrlicht: a04a0d2a4b18f45078c82d058a7c760734d7f69f",
          "timestamp": "2022-06-09T06:26:26Z",
          "url": "https://github.com/minetest/benchmarks/commit/402b4755cb73a5c9908b8e16b745128f51c6d79b"
        },
        "date": 1654756577493,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.014057,
            "range": "± 0.000203",
            "unit": "us",
            "extra": "100 samples\n2139 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.054675,
            "range": "± 0.001484",
            "unit": "us",
            "extra": "100 samples\n553 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.044619,
            "range": "± 0.000257",
            "unit": "us",
            "extra": "100 samples\n670 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.162986,
            "range": "± 0.003043",
            "unit": "us",
            "extra": "100 samples\n185 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.886508,
            "range": "± 0.021736",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.409353,
            "range": "± 0.015505",
            "unit": "us",
            "extra": "100 samples\n75 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 29.70695,
            "range": "± 0.485902",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 95.3684,
            "range": "± 2.015236",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.121536,
            "range": "± 0.002020",
            "unit": "us",
            "extra": "100 samples\n247 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.272193,
            "range": "± 0.005329",
            "unit": "us",
            "extra": "100 samples\n111 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.113761,
            "range": "± 0.004505",
            "unit": "us",
            "extra": "100 samples\n270 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.246378,
            "range": "± 0.003794",
            "unit": "us",
            "extra": "100 samples\n123 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.8301,
            "range": "± 0.931893",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 194.31792,
            "range": "± 1.135909",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 68.74204,
            "range": "± 1.174071",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 183.17376,
            "range": "± 1.225856",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.202218,
            "range": "± 0.003105",
            "unit": "us",
            "extra": "100 samples\n149 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.74406,
            "range": "± 0.005188",
            "unit": "us",
            "extra": "100 samples\n41 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.148547,
            "range": "± 0.002623",
            "unit": "us",
            "extra": "100 samples\n202 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.494647,
            "range": "± 0.010410",
            "unit": "us",
            "extra": "100 samples\n61 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 108.29764,
            "range": "± 2.500843",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 549.01529,
            "range": "± 1.958924",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 82.99822,
            "range": "± 0.782454",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 449.27777,
            "range": "± 1.778663",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "bbfc0d6d32e6036cffb1e4a36a11a1e6b37803e1",
          "message": "Minetest: 213d3562bd29805e0bc8549a4e9e3aa2bf0f0349 | Irrlicht: 53e1b52ff41f39bde002965fe52c7774f14f3af3",
          "timestamp": "2022-06-10T09:19:50Z",
          "url": "https://github.com/minetest/benchmarks/commit/bbfc0d6d32e6036cffb1e4a36a11a1e6b37803e1"
        },
        "date": 1654853238730,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013373,
            "range": "± 0.002278",
            "unit": "us",
            "extra": "100 samples\n2121 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.059438,
            "range": "± 0.006764",
            "unit": "us",
            "extra": "100 samples\n512 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.045318,
            "range": "± 0.005745",
            "unit": "us",
            "extra": "100 samples\n640 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.168045,
            "range": "± 0.029350",
            "unit": "us",
            "extra": "100 samples\n188 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 7.59313,
            "range": "± 1.251897",
            "unit": "us",
            "extra": "100 samples\n4 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.358531,
            "range": "± 0.058666",
            "unit": "us",
            "extra": "100 samples\n75 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 27.13385,
            "range": "± 3.982613",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 99.91107,
            "range": "± 13.372051",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.135147,
            "range": "± 0.003407",
            "unit": "us",
            "extra": "100 samples\n231 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.325016,
            "range": "± 0.031216",
            "unit": "us",
            "extra": "100 samples\n109 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.115205,
            "range": "± 0.022119",
            "unit": "us",
            "extra": "100 samples\n251 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.260513,
            "range": "± 0.035634",
            "unit": "us",
            "extra": "100 samples\n120 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 74.55131,
            "range": "± 12.498021",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 193.67574,
            "range": "± 28.450737",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 71.50126,
            "range": "± 9.996302",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 185.89235,
            "range": "± 29.880101",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.200486,
            "range": "± 0.036705",
            "unit": "us",
            "extra": "100 samples\n149 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.828623,
            "range": "± 0.099878",
            "unit": "us",
            "extra": "100 samples\n41 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.147814,
            "range": "± 0.015278",
            "unit": "us",
            "extra": "100 samples\n187 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.577814,
            "range": "± 0.052041",
            "unit": "us",
            "extra": "100 samples\n61 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 105.77989,
            "range": "± 13.949896",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 526.4103,
            "range": "± 81.372856",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 75.71745,
            "range": "± 10.946392",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 444.72859,
            "range": "± 54.324226",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "a28d21f12f4aa6d085d29f21cdd3cb4cebfc6311",
          "message": "Minetest: ba65e0ace76dc39dab15b70725cafc629d165e7f | Irrlicht: 53e1b52ff41f39bde002965fe52c7774f14f3af3",
          "timestamp": "2022-06-11T01:54:25Z",
          "url": "https://github.com/minetest/benchmarks/commit/a28d21f12f4aa6d085d29f21cdd3cb4cebfc6311"
        },
        "date": 1654912906676,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.011373,
            "range": "± 0.000401",
            "unit": "us",
            "extra": "100 samples\n2647 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.05626,
            "range": "± 0.002285",
            "unit": "us",
            "extra": "100 samples\n534 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.044719,
            "range": "± 0.005472",
            "unit": "us",
            "extra": "100 samples\n777 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.139732,
            "range": "± 0.001746",
            "unit": "us",
            "extra": "100 samples\n209 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.18367,
            "range": "± 0.079102",
            "unit": "us",
            "extra": "100 samples\n6 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.405079,
            "range": "± 0.057357",
            "unit": "us",
            "extra": "100 samples\n76 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 37.73004,
            "range": "± 11.995039",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 88.30506,
            "range": "± 1.602669",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.124822,
            "range": "± 0.000319",
            "unit": "us",
            "extra": "100 samples\n236 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.26436,
            "range": "± 0.020124",
            "unit": "us",
            "extra": "100 samples\n114 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.1132,
            "range": "± 0.000308",
            "unit": "us",
            "extra": "100 samples\n260 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.243418,
            "range": "± 0.004768",
            "unit": "us",
            "extra": "100 samples\n122 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 81.76107,
            "range": "± 1.067536",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 176.90115,
            "range": "± 2.600246",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 74.53606,
            "range": "± 1.701323",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 163.50313,
            "range": "± 1.788747",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.199584,
            "range": "± 0.006730",
            "unit": "us",
            "extra": "100 samples\n149 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.696024,
            "range": "± 0.014063",
            "unit": "us",
            "extra": "100 samples\n43 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.149847,
            "range": "± 0.002414",
            "unit": "us",
            "extra": "100 samples\n196 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.462516,
            "range": "± 0.001346",
            "unit": "us",
            "extra": "100 samples\n64 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 103.64807,
            "range": "± 4.355247",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 528.00641,
            "range": "± 5.592000",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 85.24106,
            "range": "± 3.103411",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 385.04829,
            "range": "± 4.854802",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "29c12a6bb69693b2ac2545286b5e184be523c125",
          "message": "Minetest: 7ffc0268dfd78647187554d6248015329e9f5d2d | Irrlicht: 53e1b52ff41f39bde002965fe52c7774f14f3af3",
          "timestamp": "2022-06-11T18:24:04Z",
          "url": "https://github.com/minetest/benchmarks/commit/29c12a6bb69693b2ac2545286b5e184be523c125"
        },
        "date": 1654972342629,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.016886,
            "range": "± 0.001792",
            "unit": "us",
            "extra": "100 samples\n2127 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.06487,
            "range": "± 0.003374",
            "unit": "us",
            "extra": "100 samples\n532 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.047365,
            "range": "± 0.004753",
            "unit": "us",
            "extra": "100 samples\n749 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.173342,
            "range": "± 0.017223",
            "unit": "us",
            "extra": "100 samples\n180 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 7.543728,
            "range": "± 0.783971",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.508407,
            "range": "± 0.294270",
            "unit": "us",
            "extra": "100 samples\n73 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 35.63167,
            "range": "± 3.435599",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 99.81787,
            "range": "± 8.803205",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.135403,
            "range": "± 0.015778",
            "unit": "us",
            "extra": "100 samples\n252 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.325765,
            "range": "± 0.006036",
            "unit": "us",
            "extra": "100 samples\n112 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.13214,
            "range": "± 0.008351",
            "unit": "us",
            "extra": "100 samples\n277 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.270071,
            "range": "± 0.028817",
            "unit": "us",
            "extra": "100 samples\n122 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.18634,
            "range": "± 10.991111",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 215.94708,
            "range": "± 16.610051",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 72.25932,
            "range": "± 7.716818",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 179.52541,
            "range": "± 28.093683",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.239826,
            "range": "± 0.034248",
            "unit": "us",
            "extra": "100 samples\n151 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.780236,
            "range": "± 0.145562",
            "unit": "us",
            "extra": "100 samples\n45 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.177432,
            "range": "± 0.003437",
            "unit": "us",
            "extra": "100 samples\n210 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.570651,
            "range": "± 0.037152",
            "unit": "us",
            "extra": "100 samples\n64 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 137.65156,
            "range": "± 6.708921",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 625.60671,
            "range": "± 32.340250",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 90.69369,
            "range": "± 11.506622",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 500.3294,
            "range": "± 37.805827",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "5b563215cff960c6af14295caa79f71659bb0d03",
          "message": "Minetest: 0f3f1a001c0dcaa91169bbc90900a47120bb2763 | Irrlicht: 53e1b52ff41f39bde002965fe52c7774f14f3af3",
          "timestamp": "2022-06-13T18:27:35Z",
          "url": "https://github.com/minetest/benchmarks/commit/5b563215cff960c6af14295caa79f71659bb0d03"
        },
        "date": 1655145351617,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.017219,
            "range": "± 0.001112",
            "unit": "us",
            "extra": "100 samples\n2047 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.062247,
            "range": "± 0.004798",
            "unit": "us",
            "extra": "100 samples\n544 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.046031,
            "range": "± 0.001846",
            "unit": "us",
            "extra": "100 samples\n726 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.182883,
            "range": "± 0.014248",
            "unit": "us",
            "extra": "100 samples\n195 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 7.64367,
            "range": "± 0.856188",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.489908,
            "range": "± 0.032445",
            "unit": "us",
            "extra": "100 samples\n73 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 36.0973,
            "range": "± 0.498745",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 106.64181,
            "range": "± 2.966606",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.145164,
            "range": "± 0.006736",
            "unit": "us",
            "extra": "100 samples\n240 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.314029,
            "range": "± 0.026827",
            "unit": "us",
            "extra": "100 samples\n111 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.132891,
            "range": "± 0.000271",
            "unit": "us",
            "extra": "100 samples\n272 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.279195,
            "range": "± 0.015551",
            "unit": "us",
            "extra": "100 samples\n124 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 88.78114,
            "range": "± 1.149625",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 221.36883,
            "range": "± 9.770342",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 79.54485,
            "range": "± 4.704158",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 216.97276,
            "range": "± 9.381615",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.236981,
            "range": "± 0.015113",
            "unit": "us",
            "extra": "100 samples\n146 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.87603,
            "range": "± 0.072027",
            "unit": "us",
            "extra": "100 samples\n41 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.168753,
            "range": "± 0.012946",
            "unit": "us",
            "extra": "100 samples\n202 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.583655,
            "range": "± 0.010916",
            "unit": "us",
            "extra": "100 samples\n63 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 133.28661,
            "range": "± 9.142385",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 618.24823,
            "range": "± 23.639760",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 102.16762,
            "range": "± 4.918170",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 516.30846,
            "range": "± 22.518457",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "1d1147eba7aa94ea327d5723d55a0e91f77abd50",
          "message": "Minetest: 992f501159b2fc6c5878d86cc477413250b4efa2 | Irrlicht: 53e1b52ff41f39bde002965fe52c7774f14f3af3",
          "timestamp": "2022-06-14T18:26:22Z",
          "url": "https://github.com/minetest/benchmarks/commit/1d1147eba7aa94ea327d5723d55a0e91f77abd50"
        },
        "date": 1655231629892,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.014401,
            "range": "± 0.000266",
            "unit": "us",
            "extra": "100 samples\n2070 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.05501,
            "range": "± 0.001389",
            "unit": "us",
            "extra": "100 samples\n552 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.040684,
            "range": "± 0.000734",
            "unit": "us",
            "extra": "100 samples\n734 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.152757,
            "range": "± 0.004120",
            "unit": "us",
            "extra": "100 samples\n196 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.91388,
            "range": "± 0.138544",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.410545,
            "range": "± 0.018046",
            "unit": "us",
            "extra": "100 samples\n74 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 30.04235,
            "range": "± 0.073027",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 89.79207,
            "range": "± 1.020850",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.120965,
            "range": "± 0.003191",
            "unit": "us",
            "extra": "100 samples\n246 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.27078,
            "range": "± 0.002185",
            "unit": "us",
            "extra": "100 samples\n112 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.110145,
            "range": "± 0.002950",
            "unit": "us",
            "extra": "100 samples\n272 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.24418,
            "range": "± 0.005394",
            "unit": "us",
            "extra": "100 samples\n124 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.7199,
            "range": "± 0.682133",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 193.19526,
            "range": "± 1.484476",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 69.11782,
            "range": "± 0.769483",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 186.08319,
            "range": "± 3.466783",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.205879,
            "range": "± 0.004100",
            "unit": "us",
            "extra": "100 samples\n146 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.730485,
            "range": "± 0.006247",
            "unit": "us",
            "extra": "100 samples\n42 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.146904,
            "range": "± 0.004263",
            "unit": "us",
            "extra": "100 samples\n204 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.482831,
            "range": "± 0.003202",
            "unit": "us",
            "extra": "100 samples\n63 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 118.47938,
            "range": "± 3.870673",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 532.28107,
            "range": "± 3.595360",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 87.04302,
            "range": "± 2.869615",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 450.62728,
            "range": "± 4.443366",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "27b499e4a656f9362fa64bbfc9828c46c35713dd",
          "message": "Minetest: 46e7b5135292ae7aa233577d1cc364d60fc932f8 | Irrlicht: 53e1b52ff41f39bde002965fe52c7774f14f3af3",
          "timestamp": "2022-06-15T15:23:22Z",
          "url": "https://github.com/minetest/benchmarks/commit/27b499e4a656f9362fa64bbfc9828c46c35713dd"
        },
        "date": 1655307148331,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013625,
            "range": "± 0.000933",
            "unit": "us",
            "extra": "100 samples\n2606 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.057862,
            "range": "± 0.012757",
            "unit": "us",
            "extra": "100 samples\n491 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.053253,
            "range": "± 0.007998",
            "unit": "us",
            "extra": "100 samples\n620 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.173939,
            "range": "± 0.009384",
            "unit": "us",
            "extra": "100 samples\n177 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.168309,
            "range": "± 1.992510",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.582022,
            "range": "± 0.058345",
            "unit": "us",
            "extra": "100 samples\n53 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 41.74816,
            "range": "± 4.206994",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 135.41371,
            "range": "± 267.608260",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.124438,
            "range": "± 0.020609",
            "unit": "us",
            "extra": "100 samples\n238 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.325598,
            "range": "± 0.049216",
            "unit": "us",
            "extra": "100 samples\n99 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.118203,
            "range": "± 0.022294",
            "unit": "us",
            "extra": "100 samples\n272 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.326304,
            "range": "± 0.164553",
            "unit": "us",
            "extra": "100 samples\n109 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 77.86541,
            "range": "± 53.765001",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 225.70025,
            "range": "± 40.141521",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 65.9183,
            "range": "± 14.694438",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 210.9,
            "range": "± 19.692184",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.221446,
            "range": "± 0.036180",
            "unit": "us",
            "extra": "100 samples\n146 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.740718,
            "range": "± 0.088440",
            "unit": "us",
            "extra": "100 samples\n35 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.161733,
            "range": "± 0.028961",
            "unit": "us",
            "extra": "100 samples\n194 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 1.21948,
            "range": "± 7.307142",
            "unit": "us",
            "extra": "100 samples\n57 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 113.39546,
            "range": "± 17.043791",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 634.10775,
            "range": "± 53.755520",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 90.30945,
            "range": "± 14.934701",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 541.89442,
            "range": "± 80.268805",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "265a318de25bb197c7726d164f125c3918050e95",
          "message": "Minetest: 0530ec11c0371bbe10a22c1800e65ad10234c0b8 | Irrlicht: 53e1b52ff41f39bde002965fe52c7774f14f3af3",
          "timestamp": "2022-06-15T21:18:04Z",
          "url": "https://github.com/minetest/benchmarks/commit/265a318de25bb197c7726d164f125c3918050e95"
        },
        "date": 1655328300614,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.011289,
            "range": "± 0.000702",
            "unit": "us",
            "extra": "100 samples\n2672 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.05629,
            "range": "± 0.002429",
            "unit": "us",
            "extra": "100 samples\n531 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.043392,
            "range": "± 0.000683",
            "unit": "us",
            "extra": "100 samples\n668 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.138559,
            "range": "± 0.003368",
            "unit": "us",
            "extra": "100 samples\n211 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.149162,
            "range": "± 0.224035",
            "unit": "us",
            "extra": "100 samples\n6 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.39516,
            "range": "± 0.032636",
            "unit": "us",
            "extra": "100 samples\n75 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 41.54495,
            "range": "± 6.706399",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 88.7639,
            "range": "± 1.370196",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.118523,
            "range": "± 0.000785",
            "unit": "us",
            "extra": "100 samples\n243 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.258357,
            "range": "± 0.002046",
            "unit": "us",
            "extra": "100 samples\n112 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.107022,
            "range": "± 0.000767",
            "unit": "us",
            "extra": "100 samples\n273 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.239573,
            "range": "± 0.005207",
            "unit": "us",
            "extra": "100 samples\n122 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.52893,
            "range": "± 0.675626",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 169.0548,
            "range": "± 1.973074",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 68.31493,
            "range": "± 0.815993",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 159.29882,
            "range": "± 1.956377",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.20174,
            "range": "± 0.003499",
            "unit": "us",
            "extra": "100 samples\n146 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.692116,
            "range": "± 0.004513",
            "unit": "us",
            "extra": "100 samples\n43 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.149298,
            "range": "± 0.003091",
            "unit": "us",
            "extra": "100 samples\n198 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.47739,
            "range": "± 0.009228",
            "unit": "us",
            "extra": "100 samples\n64 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 101.1229,
            "range": "± 2.871642",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 543.35643,
            "range": "± 9.198062",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 81.9209,
            "range": "± 2.688509",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 381.11258,
            "range": "± 5.009125",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "82eff0e2927a7a0f6e339ab53b7184fe9a3d65e3",
          "message": "Minetest: 622d857bed52404c7d54bcf7ff056d0c0250f2be | Irrlicht: 53e1b52ff41f39bde002965fe52c7774f14f3af3",
          "timestamp": "2022-06-16T21:20:50Z",
          "url": "https://github.com/minetest/benchmarks/commit/82eff0e2927a7a0f6e339ab53b7184fe9a3d65e3"
        },
        "date": 1655415030359,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.015979,
            "range": "± 0.005582",
            "unit": "us",
            "extra": "100 samples\n2392 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.068096,
            "range": "± 0.019689",
            "unit": "us",
            "extra": "100 samples\n511 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.060355,
            "range": "± 0.015527",
            "unit": "us",
            "extra": "100 samples\n584 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.19123,
            "range": "± 0.058162",
            "unit": "us",
            "extra": "100 samples\n179 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.237743,
            "range": "± 0.954001",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.700113,
            "range": "± 0.223533",
            "unit": "us",
            "extra": "100 samples\n46 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 44.82926,
            "range": "± 15.335190",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 111.85466,
            "range": "± 13.836122",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.13298,
            "range": "± 0.003065",
            "unit": "us",
            "extra": "100 samples\n246 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.341426,
            "range": "± 0.084502",
            "unit": "us",
            "extra": "100 samples\n99 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.134429,
            "range": "± 0.034437",
            "unit": "us",
            "extra": "100 samples\n266 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.281479,
            "range": "± 0.037621",
            "unit": "us",
            "extra": "100 samples\n113 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 76.0764,
            "range": "± 7.926386",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 231.85619,
            "range": "± 20.240027",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 80.29929,
            "range": "± 19.212203",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 225.42018,
            "range": "± 37.563650",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.246462,
            "range": "± 0.065217",
            "unit": "us",
            "extra": "100 samples\n141 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.877084,
            "range": "± 0.214254",
            "unit": "us",
            "extra": "100 samples\n38 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.189836,
            "range": "± 0.084728",
            "unit": "us",
            "extra": "100 samples\n188 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.609771,
            "range": "± 0.118354",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 124.2284,
            "range": "± 13.045022",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 705.2176,
            "range": "± 101.378635",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 96.28955,
            "range": "± 15.818038",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 536.25723,
            "range": "± 50.393508",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "0400eddf2ebee3528e907cbefbef8e94b0373cbd",
          "message": "Minetest: ae555465ba1c02d5fe6b409c50191ddc34d26d75 | Irrlicht: 53e1b52ff41f39bde002965fe52c7774f14f3af3",
          "timestamp": "2022-06-17T01:57:34Z",
          "url": "https://github.com/minetest/benchmarks/commit/0400eddf2ebee3528e907cbefbef8e94b0373cbd"
        },
        "date": 1655431577610,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.011088,
            "range": "± 0.004730",
            "unit": "us",
            "extra": "100 samples\n2546 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.059877,
            "range": "± 0.025383",
            "unit": "us",
            "extra": "100 samples\n528 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.048148,
            "range": "± 0.018648",
            "unit": "us",
            "extra": "100 samples\n718 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.167006,
            "range": "± 0.069415",
            "unit": "us",
            "extra": "100 samples\n154 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 4.170857,
            "range": "± 0.930447",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.594135,
            "range": "± 0.118131",
            "unit": "us",
            "extra": "100 samples\n52 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 45.32301,
            "range": "± 40.077534",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 90.76802,
            "range": "± 20.467927",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.118511,
            "range": "± 0.027264",
            "unit": "us",
            "extra": "100 samples\n266 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.329959,
            "range": "± 0.153956",
            "unit": "us",
            "extra": "100 samples\n98 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.100326,
            "range": "± 0.023398",
            "unit": "us",
            "extra": "100 samples\n304 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.2531,
            "range": "± 0.056337",
            "unit": "us",
            "extra": "100 samples\n110 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 71.71001,
            "range": "± 14.880181",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 252.27905,
            "range": "± 287.315487",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 65.11602,
            "range": "± 18.808864",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 205.78404,
            "range": "± 44.118264",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.203075,
            "range": "± 0.066723",
            "unit": "us",
            "extra": "100 samples\n160 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.67585,
            "range": "± 0.068271",
            "unit": "us",
            "extra": "100 samples\n40 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.140524,
            "range": "± 0.072729",
            "unit": "us",
            "extra": "100 samples\n210 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.619574,
            "range": "± 0.211376",
            "unit": "us",
            "extra": "100 samples\n54 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 99.11507,
            "range": "± 24.720567",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 571.7354,
            "range": "± 98.127331",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 80.97605,
            "range": "± 18.084927",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 466.12238,
            "range": "± 71.185837",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "53ed8ab41be700502efcadc14dc3bd957cb6efd3",
          "message": "Minetest: a83d81ff45fda9a93a7e35f8921e826069c843d0 | Irrlicht: 53e1b52ff41f39bde002965fe52c7774f14f3af3",
          "timestamp": "2022-06-17T21:17:42Z",
          "url": "https://github.com/minetest/benchmarks/commit/53ed8ab41be700502efcadc14dc3bd957cb6efd3"
        },
        "date": 1655501083204,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.011407,
            "range": "± 0.001112",
            "unit": "us",
            "extra": "100 samples\n2598 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.04994,
            "range": "± 0.002186",
            "unit": "us",
            "extra": "100 samples\n587 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.035904,
            "range": "± 0.000879",
            "unit": "us",
            "extra": "100 samples\n793 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.140109,
            "range": "± 0.004091",
            "unit": "us",
            "extra": "100 samples\n207 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.189273,
            "range": "± 0.086892",
            "unit": "us",
            "extra": "100 samples\n6 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.3951,
            "range": "± 0.037035",
            "unit": "us",
            "extra": "100 samples\n75 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 39.26408,
            "range": "± 9.587157",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 89.20563,
            "range": "± 1.730842",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.128616,
            "range": "± 0.002559",
            "unit": "us",
            "extra": "100 samples\n228 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.258315,
            "range": "± 0.002828",
            "unit": "us",
            "extra": "100 samples\n113 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.116257,
            "range": "± 0.001349",
            "unit": "us",
            "extra": "100 samples\n255 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.253527,
            "range": "± 0.008172",
            "unit": "us",
            "extra": "100 samples\n115 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 81.26635,
            "range": "± 0.972312",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 177.1615,
            "range": "± 1.110378",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 74.407,
            "range": "± 0.746015",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 167.771,
            "range": "± 2.182336",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.195797,
            "range": "± 0.004949",
            "unit": "us",
            "extra": "100 samples\n150 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.68734,
            "range": "± 0.016135",
            "unit": "us",
            "extra": "100 samples\n43 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.147973,
            "range": "± 0.003386",
            "unit": "us",
            "extra": "100 samples\n200 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.466243,
            "range": "± 0.010583",
            "unit": "us",
            "extra": "100 samples\n63 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 101.57693,
            "range": "± 3.077044",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 527.67882,
            "range": "± 6.308963",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 84.98068,
            "range": "± 2.583478",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 390.03834,
            "range": "± 3.354835",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "7a6537cbd7e1dde8aff54cacd9df6b204626fbfa",
          "message": "Minetest: e92a217bd19ee0b28890a7b33e5c6d7c037354cc | Irrlicht: 53e1b52ff41f39bde002965fe52c7774f14f3af3",
          "timestamp": "2022-06-19T12:35:18Z",
          "url": "https://github.com/minetest/benchmarks/commit/7a6537cbd7e1dde8aff54cacd9df6b204626fbfa"
        },
        "date": 1655642569510,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013403,
            "range": "± 0.000216",
            "unit": "us",
            "extra": "100 samples\n2212 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.05429,
            "range": "± 0.001739",
            "unit": "us",
            "extra": "100 samples\n556 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.04721,
            "range": "± 0.000948",
            "unit": "us",
            "extra": "100 samples\n627 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.157612,
            "range": "± 0.003033",
            "unit": "us",
            "extra": "100 samples\n187 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.9081,
            "range": "± 0.028560",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.40387,
            "range": "± 0.007492",
            "unit": "us",
            "extra": "100 samples\n74 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 29.6494,
            "range": "± 0.117599",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 92.44729,
            "range": "± 1.245817",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.120949,
            "range": "± 0.002128",
            "unit": "us",
            "extra": "100 samples\n245 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.271022,
            "range": "± 0.009155",
            "unit": "us",
            "extra": "100 samples\n110 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.112507,
            "range": "± 0.004927",
            "unit": "us",
            "extra": "100 samples\n263 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.242971,
            "range": "± 0.003962",
            "unit": "us",
            "extra": "100 samples\n123 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.267,
            "range": "± 0.584338",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 193.03561,
            "range": "± 1.901634",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 68.37192,
            "range": "± 0.937779",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 181.15245,
            "range": "± 0.954290",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.203901,
            "range": "± 0.004071",
            "unit": "us",
            "extra": "100 samples\n147 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.74362,
            "range": "± 0.011417",
            "unit": "us",
            "extra": "100 samples\n41 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.148962,
            "range": "± 0.002661",
            "unit": "us",
            "extra": "100 samples\n198 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.492335,
            "range": "± 0.009640",
            "unit": "us",
            "extra": "100 samples\n61 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 110.50752,
            "range": "± 1.269102",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 549.06751,
            "range": "± 1.848331",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 84.63315,
            "range": "± 0.924553",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 451.17314,
            "range": "± 2.060663",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "a130804decc8a2e94127238dac49775f7c8d041c",
          "message": "Minetest: a463620edbe57071a7101297d33226507567ca73 | Irrlicht: 53e1b52ff41f39bde002965fe52c7774f14f3af3",
          "timestamp": "2022-06-20T21:23:15Z",
          "url": "https://github.com/minetest/benchmarks/commit/a130804decc8a2e94127238dac49775f7c8d041c"
        },
        "date": 1655760625979,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.014092,
            "range": "± 0.000461",
            "unit": "us",
            "extra": "100 samples\n2123 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.054466,
            "range": "± 0.001524",
            "unit": "us",
            "extra": "100 samples\n522 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.043803,
            "range": "± 0.000766",
            "unit": "us",
            "extra": "100 samples\n678 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.161718,
            "range": "± 0.002640",
            "unit": "us",
            "extra": "100 samples\n186 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.904722,
            "range": "± 0.083986",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.406713,
            "range": "± 0.015517",
            "unit": "us",
            "extra": "100 samples\n75 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 29.65502,
            "range": "± 0.219257",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 95.22268,
            "range": "± 1.694817",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.121726,
            "range": "± 0.002539",
            "unit": "us",
            "extra": "100 samples\n246 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.271734,
            "range": "± 0.004164",
            "unit": "us",
            "extra": "100 samples\n111 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.110646,
            "range": "± 0.001507",
            "unit": "us",
            "extra": "100 samples\n270 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.246504,
            "range": "± 0.001170",
            "unit": "us",
            "extra": "100 samples\n122 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.56226,
            "range": "± 0.969303",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 193.89942,
            "range": "± 0.946317",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 68.52321,
            "range": "± 0.604647",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 182.66517,
            "range": "± 1.137443",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.201711,
            "range": "± 0.003227",
            "unit": "us",
            "extra": "100 samples\n147 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.74033,
            "range": "± 0.003518",
            "unit": "us",
            "extra": "100 samples\n41 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.147663,
            "range": "± 0.001024",
            "unit": "us",
            "extra": "100 samples\n203 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.494829,
            "range": "± 0.010099",
            "unit": "us",
            "extra": "100 samples\n61 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 108.17288,
            "range": "± 1.986876",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 548.86662,
            "range": "± 1.471814",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 82.88344,
            "range": "± 0.908841",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 447.98784,
            "range": "± 1.706820",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "9ebef4a9c87f0da8407e699044bd5b1a334209d5",
          "message": "Minetest: 35ad006234ce40edc4c59feee63fb1546f643508 | Irrlicht: 53e1b52ff41f39bde002965fe52c7774f14f3af3",
          "timestamp": "2022-06-26T15:20:18Z",
          "url": "https://github.com/minetest/benchmarks/commit/9ebef4a9c87f0da8407e699044bd5b1a334209d5"
        },
        "date": 1656257225698,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.011591,
            "range": "± 0.000273",
            "unit": "us",
            "extra": "100 samples\n2615 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.050488,
            "range": "± 0.002115",
            "unit": "us",
            "extra": "100 samples\n597 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.048626,
            "range": "± 0.002095",
            "unit": "us",
            "extra": "100 samples\n701 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.141672,
            "range": "± 0.007403",
            "unit": "us",
            "extra": "100 samples\n207 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.010172,
            "range": "± 0.238952",
            "unit": "us",
            "extra": "100 samples\n6 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.396827,
            "range": "± 0.027808",
            "unit": "us",
            "extra": "100 samples\n75 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 28.28304,
            "range": "± 5.925729",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 92.67111,
            "range": "± 0.817974",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.117779,
            "range": "± 0.000262",
            "unit": "us",
            "extra": "100 samples\n249 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.269769,
            "range": "± 0.006382",
            "unit": "us",
            "extra": "100 samples\n108 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.105428,
            "range": "± 0.001713",
            "unit": "us",
            "extra": "100 samples\n278 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.249795,
            "range": "± 0.003009",
            "unit": "us",
            "extra": "100 samples\n117 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.1421,
            "range": "± 0.832272",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 179.27333,
            "range": "± 1.537635",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 67.2501,
            "range": "± 0.733274",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 170.80223,
            "range": "± 2.663423",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.187591,
            "range": "± 0.003766",
            "unit": "us",
            "extra": "100 samples\n154 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.695233,
            "range": "± 0.012927",
            "unit": "us",
            "extra": "100 samples\n43 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.14201,
            "range": "± 0.002659",
            "unit": "us",
            "extra": "100 samples\n202 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.468191,
            "range": "± 0.008056",
            "unit": "us",
            "extra": "100 samples\n63 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 97.72911,
            "range": "± 3.149852",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 548.0317,
            "range": "± 4.398895",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 84.2361,
            "range": "± 3.058527",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 396.83651,
            "range": "± 3.909722",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "b9614e0b4fdfa9469506c6ab01fcfd8bf0a0bfec",
          "message": "Minetest: 18fbc0394b9b3fc4e1e72550fb0e1113ee72ce64 | Irrlicht: 53e1b52ff41f39bde002965fe52c7774f14f3af3",
          "timestamp": "2022-06-28T02:02:44Z",
          "url": "https://github.com/minetest/benchmarks/commit/b9614e0b4fdfa9469506c6ab01fcfd8bf0a0bfec"
        },
        "date": 1656382173472,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013742,
            "range": "± 0.000259",
            "unit": "us",
            "extra": "100 samples\n2150 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.054786,
            "range": "± 0.001279",
            "unit": "us",
            "extra": "100 samples\n546 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.040742,
            "range": "± 0.000197",
            "unit": "us",
            "extra": "100 samples\n723 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.157764,
            "range": "± 0.003334",
            "unit": "us",
            "extra": "100 samples\n189 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.920486,
            "range": "± 0.079875",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.408924,
            "range": "± 0.026611",
            "unit": "us",
            "extra": "100 samples\n74 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 30.20535,
            "range": "± 0.482850",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 93.46009,
            "range": "± 0.754366",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.121961,
            "range": "± 0.001679",
            "unit": "us",
            "extra": "100 samples\n245 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.281153,
            "range": "± 0.002125",
            "unit": "us",
            "extra": "100 samples\n107 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.110648,
            "range": "± 0.001430",
            "unit": "us",
            "extra": "100 samples\n272 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.257732,
            "range": "± 0.004888",
            "unit": "us",
            "extra": "100 samples\n118 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.71088,
            "range": "± 0.748840",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 194.12524,
            "range": "± 1.067776",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 68.69782,
            "range": "± 0.654277",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 183.87215,
            "range": "± 1.293198",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.208671,
            "range": "± 0.004002",
            "unit": "us",
            "extra": "100 samples\n145 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.751334,
            "range": "± 0.011117",
            "unit": "us",
            "extra": "100 samples\n40 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.149072,
            "range": "± 0.002266",
            "unit": "us",
            "extra": "100 samples\n200 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.494465,
            "range": "± 0.008088",
            "unit": "us",
            "extra": "100 samples\n61 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 120.83941,
            "range": "± 0.827474",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 550.55443,
            "range": "± 1.655845",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 88.88404,
            "range": "± 0.552796",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 451.29827,
            "range": "± 1.918968",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "eba588ff93ff0b7daf54a3ce8e76c8dd57c87831",
          "message": "Minetest: a5f385917d0db5097e3cd4a1c6de794bda20c01f | Irrlicht: 53e1b52ff41f39bde002965fe52c7774f14f3af3",
          "timestamp": "2022-06-28T12:42:59Z",
          "url": "https://github.com/minetest/benchmarks/commit/eba588ff93ff0b7daf54a3ce8e76c8dd57c87831"
        },
        "date": 1656420609241,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013718,
            "range": "± 0.000042",
            "unit": "us",
            "extra": "100 samples\n2154 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.05473,
            "range": "± 0.000799",
            "unit": "us",
            "extra": "100 samples\n517 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.041023,
            "range": "± 0.000164",
            "unit": "us",
            "extra": "100 samples\n725 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.159923,
            "range": "± 0.002450",
            "unit": "us",
            "extra": "100 samples\n189 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.912292,
            "range": "± 0.017045",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.404899,
            "range": "± 0.014316",
            "unit": "us",
            "extra": "100 samples\n75 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 30.0594,
            "range": "± 0.407393",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 93.44525,
            "range": "± 0.872769",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.121814,
            "range": "± 0.002802",
            "unit": "us",
            "extra": "100 samples\n245 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.28292,
            "range": "± 0.012804",
            "unit": "us",
            "extra": "100 samples\n107 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.110748,
            "range": "± 0.002312",
            "unit": "us",
            "extra": "100 samples\n272 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.257605,
            "range": "± 0.004719",
            "unit": "us",
            "extra": "100 samples\n118 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.62,
            "range": "± 0.709284",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 194.75284,
            "range": "± 1.846257",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 68.75301,
            "range": "± 1.912595",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 183.77868,
            "range": "± 1.194885",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.206373,
            "range": "± 0.002419",
            "unit": "us",
            "extra": "100 samples\n146 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.751035,
            "range": "± 0.011222",
            "unit": "us",
            "extra": "100 samples\n41 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.148813,
            "range": "± 0.001168",
            "unit": "us",
            "extra": "100 samples\n201 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.494138,
            "range": "± 0.003642",
            "unit": "us",
            "extra": "100 samples\n61 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 120.20263,
            "range": "± 0.901051",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 551.35744,
            "range": "± 3.841966",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 89.02424,
            "range": "± 0.723580",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 451.1981,
            "range": "± 2.316263",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "ae704d0cbb96051bf97e144e3897cbad5545ee93",
          "message": "Minetest: de8ce9a8ff999c7ab9562528a972d5426a9f7cec | Irrlicht: 53e1b52ff41f39bde002965fe52c7774f14f3af3",
          "timestamp": "2022-06-29T21:18:54Z",
          "url": "https://github.com/minetest/benchmarks/commit/ae704d0cbb96051bf97e144e3897cbad5545ee93"
        },
        "date": 1656537959587,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.011071,
            "range": "± 0.000465",
            "unit": "us",
            "extra": "100 samples\n2574 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.051656,
            "range": "± 0.002214",
            "unit": "us",
            "extra": "100 samples\n570 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.049047,
            "range": "± 0.000724",
            "unit": "us",
            "extra": "100 samples\n691 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.138559,
            "range": "± 0.003636",
            "unit": "us",
            "extra": "100 samples\n209 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.196795,
            "range": "± 0.155762",
            "unit": "us",
            "extra": "100 samples\n6 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.398197,
            "range": "± 0.049709",
            "unit": "us",
            "extra": "100 samples\n75 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 29.65477,
            "range": "± 6.595623",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 89.04445,
            "range": "± 1.946468",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.122107,
            "range": "± 0.001609",
            "unit": "us",
            "extra": "100 samples\n241 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.271849,
            "range": "± 0.002443",
            "unit": "us",
            "extra": "100 samples\n107 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.110171,
            "range": "± 0.003152",
            "unit": "us",
            "extra": "100 samples\n267 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.25827,
            "range": "± 0.005302",
            "unit": "us",
            "extra": "100 samples\n114 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 74.73747,
            "range": "± 1.178368",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 182.81159,
            "range": "± 4.035647",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 68.6035,
            "range": "± 0.775798",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 172.54975,
            "range": "± 2.724296",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.192037,
            "range": "± 0.009443",
            "unit": "us",
            "extra": "100 samples\n155 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.685693,
            "range": "± 0.013873",
            "unit": "us",
            "extra": "100 samples\n43 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.143372,
            "range": "± 0.005463",
            "unit": "us",
            "extra": "100 samples\n204 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.46948,
            "range": "± 0.012882",
            "unit": "us",
            "extra": "100 samples\n62 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 98.36123,
            "range": "± 4.235575",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 529.15112,
            "range": "± 11.999121",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 84.08635,
            "range": "± 4.747332",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 381.5802,
            "range": "± 5.017096",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "1f3283e284969c23a83dd8e013c24ec185ee5f11",
          "message": "Minetest: 7494ff291785c229791a59c08c99611b4d506ce2 | Irrlicht: 53e1b52ff41f39bde002965fe52c7774f14f3af3",
          "timestamp": "2022-06-30T18:30:03Z",
          "url": "https://github.com/minetest/benchmarks/commit/1f3283e284969c23a83dd8e013c24ec185ee5f11"
        },
        "date": 1656614220622,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.011352,
            "range": "± 0.000269",
            "unit": "us",
            "extra": "100 samples\n2568 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.052965,
            "range": "± 0.002607",
            "unit": "us",
            "extra": "100 samples\n570 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.048115,
            "range": "± 0.003002",
            "unit": "us",
            "extra": "100 samples\n686 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.142298,
            "range": "± 0.007093",
            "unit": "us",
            "extra": "100 samples\n208 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.060994,
            "range": "± 0.214496",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.395506,
            "range": "± 0.041433",
            "unit": "us",
            "extra": "100 samples\n75 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 31.14595,
            "range": "± 8.523714",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 89.14192,
            "range": "± 1.016400",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.121286,
            "range": "± 0.004295",
            "unit": "us",
            "extra": "100 samples\n241 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.275205,
            "range": "± 0.015174",
            "unit": "us",
            "extra": "100 samples\n107 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.109813,
            "range": "± 0.002233",
            "unit": "us",
            "extra": "100 samples\n268 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.255522,
            "range": "± 0.001987",
            "unit": "us",
            "extra": "100 samples\n113 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 74.85892,
            "range": "± 0.901970",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 176.89378,
            "range": "± 1.809577",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 68.60391,
            "range": "± 0.629581",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 172.21378,
            "range": "± 2.345698",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.20416,
            "range": "± 0.005119",
            "unit": "us",
            "extra": "100 samples\n150 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.683092,
            "range": "± 0.012862",
            "unit": "us",
            "extra": "100 samples\n43 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.144435,
            "range": "± 0.003521",
            "unit": "us",
            "extra": "100 samples\n202 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.468206,
            "range": "± 0.012964",
            "unit": "us",
            "extra": "100 samples\n63 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 103.5619,
            "range": "± 2.612601",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 528.43338,
            "range": "± 9.353491",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 84.7619,
            "range": "± 2.661060",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 382.86852,
            "range": "± 9.247380",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "e15655306e810503146cb7c33a0332b4c13f3496",
          "message": "Minetest: 45da0d43fdb73bb7c0a746fb8ea6f588a101cace | Irrlicht: 53e1b52ff41f39bde002965fe52c7774f14f3af3",
          "timestamp": "2022-06-30T21:20:02Z",
          "url": "https://github.com/minetest/benchmarks/commit/e15655306e810503146cb7c33a0332b4c13f3496"
        },
        "date": 1656624426050,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.011159,
            "range": "± 0.000378",
            "unit": "us",
            "extra": "100 samples\n2620 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.051723,
            "range": "± 0.002522",
            "unit": "us",
            "extra": "100 samples\n579 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.049137,
            "range": "± 0.000376",
            "unit": "us",
            "extra": "100 samples\n660 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.142023,
            "range": "± 0.006754",
            "unit": "us",
            "extra": "100 samples\n207 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.025379,
            "range": "± 0.236137",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.398583,
            "range": "± 0.039462",
            "unit": "us",
            "extra": "100 samples\n75 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 39.41857,
            "range": "± 6.298948",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 89.88305,
            "range": "± 1.571240",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.120829,
            "range": "± 0.002379",
            "unit": "us",
            "extra": "100 samples\n242 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.272328,
            "range": "± 0.004876",
            "unit": "us",
            "extra": "100 samples\n107 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.109922,
            "range": "± 0.002134",
            "unit": "us",
            "extra": "100 samples\n267 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.259461,
            "range": "± 0.005523",
            "unit": "us",
            "extra": "100 samples\n113 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 74.74463,
            "range": "± 0.838938",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 183.18414,
            "range": "± 2.033852",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 68.56329,
            "range": "± 0.947422",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 171.69121,
            "range": "± 2.365333",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.188004,
            "range": "± 0.004931",
            "unit": "us",
            "extra": "100 samples\n155 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.684689,
            "range": "± 0.012667",
            "unit": "us",
            "extra": "100 samples\n43 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.145071,
            "range": "± 0.004198",
            "unit": "us",
            "extra": "100 samples\n205 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.470486,
            "range": "± 0.008818",
            "unit": "us",
            "extra": "100 samples\n63 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 98.42776,
            "range": "± 4.666130",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 531.96631,
            "range": "± 8.192427",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 83.37994,
            "range": "± 4.122247",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 385.39318,
            "range": "± 8.030855",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "3129233300fc169e3dbfb1c2afdf32efd6419094",
          "message": "Minetest: b095dc4f2bf2a1ace010dfae0ead69654b0ca3ac | Irrlicht: 53e1b52ff41f39bde002965fe52c7774f14f3af3",
          "timestamp": "2022-07-02T18:24:03Z",
          "url": "https://github.com/minetest/benchmarks/commit/3129233300fc169e3dbfb1c2afdf32efd6419094"
        },
        "date": 1656786680935,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.010352,
            "range": "± 0.001696",
            "unit": "us",
            "extra": "100 samples\n2447 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.045204,
            "range": "± 0.000407",
            "unit": "us",
            "extra": "100 samples\n471 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.03813,
            "range": "± 0.000866",
            "unit": "us",
            "extra": "100 samples\n640 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.13834,
            "range": "± 0.056145",
            "unit": "us",
            "extra": "100 samples\n174 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 4.991454,
            "range": "± 1.898557",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.457076,
            "range": "± 0.018362",
            "unit": "us",
            "extra": "100 samples\n54 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 31.44616,
            "range": "± 1.005852",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 90.43848,
            "range": "± 25.741181",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.096114,
            "range": "± 0.000559",
            "unit": "us",
            "extra": "100 samples\n238 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.235482,
            "range": "± 0.008533",
            "unit": "us",
            "extra": "100 samples\n104 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.092799,
            "range": "± 0.030380",
            "unit": "us",
            "extra": "100 samples\n263 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.210828,
            "range": "± 0.016647",
            "unit": "us",
            "extra": "100 samples\n110 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 77.4774,
            "range": "± 38.342067",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 168.76688,
            "range": "± 18.613688",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 51.05227,
            "range": "± 1.413925",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 198.98106,
            "range": "± 298.725289",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.161428,
            "range": "± 0.001069",
            "unit": "us",
            "extra": "100 samples\n152 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.612424,
            "range": "± 0.016680",
            "unit": "us",
            "extra": "100 samples\n38 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.115284,
            "range": "± 0.004722",
            "unit": "us",
            "extra": "100 samples\n212 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.495899,
            "range": "± 0.556411",
            "unit": "us",
            "extra": "100 samples\n58 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 90.92749,
            "range": "± 21.647550",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 474.2626,
            "range": "± 41.142610",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 67.10833,
            "range": "± 8.422973",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 384.30404,
            "range": "± 37.989457",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "ffd14edc29bcf6336a88121e32558dc5c1860dff",
          "message": "Minetest: 5a562a597cb8d1b71c5e0c1247836fe21ebccc56 | Irrlicht: 53e1b52ff41f39bde002965fe52c7774f14f3af3",
          "timestamp": "2022-07-02T21:17:25Z",
          "url": "https://github.com/minetest/benchmarks/commit/ffd14edc29bcf6336a88121e32558dc5c1860dff"
        },
        "date": 1656797061946,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.011606,
            "range": "± 0.000969",
            "unit": "us",
            "extra": "100 samples\n2658 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.052024,
            "range": "± 0.003138",
            "unit": "us",
            "extra": "100 samples\n585 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.043441,
            "range": "± 0.000847",
            "unit": "us",
            "extra": "100 samples\n671 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.139842,
            "range": "± 0.005074",
            "unit": "us",
            "extra": "100 samples\n210 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.422625,
            "range": "± 0.420811",
            "unit": "us",
            "extra": "100 samples\n6 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.406833,
            "range": "± 0.040427",
            "unit": "us",
            "extra": "100 samples\n73 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 41.76752,
            "range": "± 8.609336",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 88.77401,
            "range": "± 1.058778",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.121727,
            "range": "± 0.002236",
            "unit": "us",
            "extra": "100 samples\n239 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.258146,
            "range": "± 0.006871",
            "unit": "us",
            "extra": "100 samples\n114 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.111425,
            "range": "± 0.000960",
            "unit": "us",
            "extra": "100 samples\n265 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.239246,
            "range": "± 0.006221",
            "unit": "us",
            "extra": "100 samples\n121 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 72.05644,
            "range": "± 0.613997",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 176.10567,
            "range": "± 2.608847",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 67.26447,
            "range": "± 0.868814",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 163.38015,
            "range": "± 2.783426",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.193051,
            "range": "± 0.007985",
            "unit": "us",
            "extra": "100 samples\n150 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.680179,
            "range": "± 0.013842",
            "unit": "us",
            "extra": "100 samples\n43 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.147118,
            "range": "± 0.004635",
            "unit": "us",
            "extra": "100 samples\n201 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.460323,
            "range": "± 0.005221",
            "unit": "us",
            "extra": "100 samples\n64 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 102.16426,
            "range": "± 2.815913",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 527.52087,
            "range": "± 6.423232",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 77.66243,
            "range": "± 3.345550",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 381.344,
            "range": "± 3.114340",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "5749950276a2e900bde59dcf3ffd594c7aabe9fe",
          "message": "Minetest: 34f15259fa5546dc9abaf974ca5385c276443697 | Irrlicht: 53e1b52ff41f39bde002965fe52c7774f14f3af3",
          "timestamp": "2022-07-03T15:20:35Z",
          "url": "https://github.com/minetest/benchmarks/commit/5749950276a2e900bde59dcf3ffd594c7aabe9fe"
        },
        "date": 1656862052210,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.011014,
            "range": "± 0.000877",
            "unit": "us",
            "extra": "100 samples\n2617 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.055988,
            "range": "± 0.002589",
            "unit": "us",
            "extra": "100 samples\n533 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.042312,
            "range": "± 0.006395",
            "unit": "us",
            "extra": "100 samples\n756 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.243972,
            "range": "± 0.005565",
            "unit": "us",
            "extra": "100 samples\n121 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.1821,
            "range": "± 0.090459",
            "unit": "us",
            "extra": "100 samples\n6 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.399142,
            "range": "± 0.045084",
            "unit": "us",
            "extra": "100 samples\n75 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 30.594105,
            "range": "± 5.260943",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 89.17982,
            "range": "± 1.462830",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.118611,
            "range": "± 0.001800",
            "unit": "us",
            "extra": "100 samples\n248 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.395835,
            "range": "± 0.006961",
            "unit": "us",
            "extra": "100 samples\n75 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.105075,
            "range": "± 0.000809",
            "unit": "us",
            "extra": "100 samples\n276 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.380476,
            "range": "± 0.005315",
            "unit": "us",
            "extra": "100 samples\n77 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.10607,
            "range": "± 0.643160",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 177.27274,
            "range": "± 1.917167",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 67.39114,
            "range": "± 0.965060",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 167.86586,
            "range": "± 2.173531",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.198522,
            "range": "± 0.004853",
            "unit": "us",
            "extra": "100 samples\n148 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.832906,
            "range": "± 0.016117",
            "unit": "us",
            "extra": "100 samples\n36 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.150564,
            "range": "± 0.003904",
            "unit": "us",
            "extra": "100 samples\n196 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.611492,
            "range": "± 0.012285",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 99.39373,
            "range": "± 3.510714",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 526.85726,
            "range": "± 8.549227",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 85.07589,
            "range": "± 3.574093",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 380.9231,
            "range": "± 5.500035",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "368d8fbd8513d06a21d83a3f1abe16bc741215a0",
          "message": "Minetest: 34f15259fa5546dc9abaf974ca5385c276443697 | Irrlicht: 6064e121335439938692459cb461d4f5dbae903f",
          "timestamp": "2022-07-03T18:23:50Z",
          "url": "https://github.com/minetest/benchmarks/commit/368d8fbd8513d06a21d83a3f1abe16bc741215a0"
        },
        "date": 1656873066230,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013033,
            "range": "± 0.000012",
            "unit": "us",
            "extra": "100 samples\n2285 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.053741,
            "range": "± 0.001129",
            "unit": "us",
            "extra": "100 samples\n532 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.040845,
            "range": "± 0.000592",
            "unit": "us",
            "extra": "100 samples\n728 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.158976,
            "range": "± 0.002730",
            "unit": "us",
            "extra": "100 samples\n190 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.941292,
            "range": "± 0.125807",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.401712,
            "range": "± 0.008643",
            "unit": "us",
            "extra": "100 samples\n75 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 26.580845,
            "range": "± 0.392853",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 82.43614,
            "range": "± 0.872830",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.105891,
            "range": "± 0.000637",
            "unit": "us",
            "extra": "100 samples\n281 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.247714,
            "range": "± 0.004898",
            "unit": "us",
            "extra": "100 samples\n121 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.097868,
            "range": "± 0.001933",
            "unit": "us",
            "extra": "100 samples\n307 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.224003,
            "range": "± 0.001403",
            "unit": "us",
            "extra": "100 samples\n129 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 64.64487,
            "range": "± 0.627780",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 171.59138,
            "range": "± 1.346263",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 60.46682,
            "range": "± 0.644365",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 162.20823,
            "range": "± 1.265332",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.183788,
            "range": "± 0.004255",
            "unit": "us",
            "extra": "100 samples\n163 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.66452,
            "range": "± 0.011329",
            "unit": "us",
            "extra": "100 samples\n45 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.133686,
            "range": "± 0.003244",
            "unit": "us",
            "extra": "100 samples\n225 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.441107,
            "range": "± 0.010943",
            "unit": "us",
            "extra": "100 samples\n69 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 107.35349,
            "range": "± 5.322823",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 485.54367,
            "range": "± 1.924925",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 78.64008,
            "range": "± 0.739740",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 397.56646,
            "range": "± 2.123588",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "146f5dd070ea64231f314f90e81a4c91ff47943d",
          "message": "Minetest: 0e63f18a73754ebf68ebf286a95af222ab058538 | Irrlicht: 6064e121335439938692459cb461d4f5dbae903f",
          "timestamp": "2022-07-04T02:17:31Z",
          "url": "https://github.com/minetest/benchmarks/commit/146f5dd070ea64231f314f90e81a4c91ff47943d"
        },
        "date": 1656901498724,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013057,
            "range": "± 0.000190",
            "unit": "us",
            "extra": "100 samples\n2281 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.053445,
            "range": "± 0.001358",
            "unit": "us",
            "extra": "100 samples\n558 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.041021,
            "range": "± 0.002003",
            "unit": "us",
            "extra": "100 samples\n725 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.158687,
            "range": "± 0.001676",
            "unit": "us",
            "extra": "100 samples\n190 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.926516,
            "range": "± 0.101557",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.407561,
            "range": "± 0.030765",
            "unit": "us",
            "extra": "100 samples\n74 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 30.00251,
            "range": "± 0.063653",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 93.38866,
            "range": "± 0.783644",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.120707,
            "range": "± 0.003041",
            "unit": "us",
            "extra": "100 samples\n247 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.281024,
            "range": "± 0.004072",
            "unit": "us",
            "extra": "100 samples\n107 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.111165,
            "range": "± 0.000862",
            "unit": "us",
            "extra": "100 samples\n270 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.252979,
            "range": "± 0.008249",
            "unit": "us",
            "extra": "100 samples\n119 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.31928,
            "range": "± 0.802743",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 194.37541,
            "range": "± 1.315928",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 68.68024,
            "range": "± 1.936906",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 183.80323,
            "range": "± 1.013247",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.207948,
            "range": "± 0.004358",
            "unit": "us",
            "extra": "100 samples\n144 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.755914,
            "range": "± 0.013888",
            "unit": "us",
            "extra": "100 samples\n40 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.151119,
            "range": "± 0.003302",
            "unit": "us",
            "extra": "100 samples\n198 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.498209,
            "range": "± 0.007851",
            "unit": "us",
            "extra": "100 samples\n60 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 120.88511,
            "range": "± 1.209062",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 550.69267,
            "range": "± 2.127822",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 88.81354,
            "range": "± 0.902410",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 449.87396,
            "range": "± 2.002485",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "f12c084d201099eea436deae0fe09589f34b78bc",
          "message": "Minetest: 0e63f18a73754ebf68ebf286a95af222ab058538 | Irrlicht: 6db035e0aaf0ff3528748837835e959fea16d1ef",
          "timestamp": "2022-07-04T12:43:03Z",
          "url": "https://github.com/minetest/benchmarks/commit/f12c084d201099eea436deae0fe09589f34b78bc"
        },
        "date": 1656939141972,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.012749,
            "range": "± 0.003913",
            "unit": "us",
            "extra": "100 samples\n2554 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.059231,
            "range": "± 0.007737",
            "unit": "us",
            "extra": "100 samples\n468 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.045358,
            "range": "± 0.005443",
            "unit": "us",
            "extra": "100 samples\n675 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.173064,
            "range": "± 0.013609",
            "unit": "us",
            "extra": "100 samples\n178 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 4.456336,
            "range": "± 1.183858",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.551813,
            "range": "± 0.200890",
            "unit": "us",
            "extra": "100 samples\n57 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 45.67248,
            "range": "± 9.970313",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 104.40612,
            "range": "± 53.752149",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.152269,
            "range": "± 0.321839",
            "unit": "us",
            "extra": "100 samples\n243 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.328024,
            "range": "± 0.077992",
            "unit": "us",
            "extra": "100 samples\n98 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.121036,
            "range": "± 0.037611",
            "unit": "us",
            "extra": "100 samples\n288 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.262103,
            "range": "± 0.037888",
            "unit": "us",
            "extra": "100 samples\n110 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 67.78571,
            "range": "± 9.385171",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 209.53122,
            "range": "± 23.244463",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 60.90467,
            "range": "± 9.847401",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 187.93704,
            "range": "± 19.756171",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.199068,
            "range": "± 0.015060",
            "unit": "us",
            "extra": "100 samples\n136 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.860384,
            "range": "± 0.228108",
            "unit": "us",
            "extra": "100 samples\n40 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.156521,
            "range": "± 0.038402",
            "unit": "us",
            "extra": "100 samples\n204 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.540058,
            "range": "± 0.087124",
            "unit": "us",
            "extra": "100 samples\n57 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 109.11216,
            "range": "± 26.596198",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 603.86057,
            "range": "± 104.725843",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 83.23289,
            "range": "± 11.202529",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 569.7042,
            "range": "± 457.549948",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "c9874a7c0843e69066a109b6dedc82c6f62a69ef",
          "message": "Minetest: 0e63f18a73754ebf68ebf286a95af222ab058538 | Irrlicht: c4ca31313f8155e8c531f61d576c13eb07a8fd51",
          "timestamp": "2022-07-07T21:18:34Z",
          "url": "https://github.com/minetest/benchmarks/commit/c9874a7c0843e69066a109b6dedc82c6f62a69ef"
        },
        "date": 1657229133004,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.011201,
            "range": "± 0.000485",
            "unit": "us",
            "extra": "100 samples\n2648 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.054608,
            "range": "± 0.002575",
            "unit": "us",
            "extra": "100 samples\n545 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.050944,
            "range": "± 0.001980",
            "unit": "us",
            "extra": "100 samples\n586 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.139919,
            "range": "± 0.003142",
            "unit": "us",
            "extra": "100 samples\n208 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.10835,
            "range": "± 0.179702",
            "unit": "us",
            "extra": "100 samples\n6 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.400375,
            "range": "± 0.042881",
            "unit": "us",
            "extra": "100 samples\n75 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 30.37112,
            "range": "± 6.339107",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 89.40235,
            "range": "± 1.971401",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.117025,
            "range": "± 0.002411",
            "unit": "us",
            "extra": "100 samples\n249 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.267882,
            "range": "± 0.009550",
            "unit": "us",
            "extra": "100 samples\n109 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.106291,
            "range": "± 0.002559",
            "unit": "us",
            "extra": "100 samples\n279 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.256863,
            "range": "± 0.007819",
            "unit": "us",
            "extra": "100 samples\n116 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.30826,
            "range": "± 1.297389",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 183.43964,
            "range": "± 2.354396",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 68.29223,
            "range": "± 0.699818",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 172.33362,
            "range": "± 9.060826",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.198656,
            "range": "± 0.005633",
            "unit": "us",
            "extra": "100 samples\n145 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.68377,
            "range": "± 0.005814",
            "unit": "us",
            "extra": "100 samples\n43 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.15716,
            "range": "± 0.005148",
            "unit": "us",
            "extra": "100 samples\n195 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.466033,
            "range": "± 0.011298",
            "unit": "us",
            "extra": "100 samples\n64 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 99.65041,
            "range": "± 4.103021",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 529.77897,
            "range": "± 9.020345",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 82.07429,
            "range": "± 2.968633",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 383.20942,
            "range": "± 9.667103",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      }
    ]
  }
}