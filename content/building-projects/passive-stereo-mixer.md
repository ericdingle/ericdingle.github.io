## Passive Stereo Mixer
October, 2015

![Photo](http://i.imgur.com/545FAvJm.jpg)

When the Chromecast came out, I had this grand plan to spiffy up my living room with a wall-mounted
TV and a decent audio system so that I could blast tunes to my heart's content. All that was well
and done until the Chromecast audio was released! Now I've got this dilemma. I originally intended
to use the system more for music, but it was kind of nice to throw a YouTube or Netflix video up
once in a while. However, I don't like running the TV when all I want is to play music. So what's
the solution? Two Chromecasts and a passive stereo mixer!

So what the heck is a passive stereo mixer? First off, let's go over what we're trying to connect
together. There's a TV with a Chromecast that has an analog stereo audio output, there's a
Chromecast audio that has an analog stereo audio output, and there's an amplifier with a single
analog stereo audio input (unlike some amps that have many inputs and the ability to change inputs
on demand). So two audio outputs and one audio input. You might say:

> Well, that's easy. You just use a handy Y-splitter. You know? The one that lets you and your
friend listen to your walkman at the same time, each with your own headphones, basically like
Siamese twins forever required to be a few feet apart?

Right? WRONG! Why? Because impedance.

So what the heck is impedance? Impedance is the opposition to current in a circuit when an A/C
voltage is applied. Things that have impedance: resistors, capacitors, inductors. In the audio
realm, we're mostly dealing with resistors. For an amp and speaker, we can simplify the whole system
as a voltage source driving a circuit with two resistors connected in series, the output impedance
(resistance in the Chromecast output) and load impedance (resistance in the amp input). In my case,
the Chromecast output impedance is 34.5 ohms and the amp's (Onkyo LS3100) input impedance is 47
kilo-ohms. Since the amp impedance is REALLY high, the majority of the voltage drop would be across
the input impedance and the current of the signal would be quite low. We can also note that the
Chromecast's output impedance indicates that it's not meant to be used with low-impedance headphones
since a low voltage drop across the input load would result in low volume.

What would happen if we used a Y-splitter? The Y-splitter is intended for one output source to drive
two inputs. Like the example above, the input should generally have a higher impedance than the
output impedance (I've read that the rule of thumb is at least 8:1 for headphones), and having two
sets of headphones hooked up to the output would still hold this condition. However, having two
output sources attached in this way would mean that one active output source would drive both the
input load and the output source. This is the problem: the (low) impedance output source may not be
built to handle being driven by an external source, and it could get damaged. The solution is to add
a resistor in series with the output impedance which effectively reduces the voltage drop of the
signal across the other output's driver keeping it safe and sound.

Lastly, what makes this circuit "passive"? Passive simply means that the circuit doesn't require
external power (the opposite being "active"). The extra resistors cause additional voltage drop
in the circuit (energy lost as heat) which would diminish the output volume. In my case, the audio
signal is being sent to the amp's pre-amp, so a reduction in input signal amplitude isn't severe.
The amplifier is built to actively boost the signal that is output to the speakers.
